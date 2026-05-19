// FAB chat widget — open/close, suggestion chips, canned responses.

const RESPONSES = {
  "How do I register?": "Registration takes about a minute. Click the Login button at the top, choose 'Create account', enter your email, verify the OTP, and you'll be guided through the Business Details Bot to identify your approvals.",
  "What approvals do I need?": "It depends on your sector, scale, and business activity. After registration, our Business Details Bot will ask you a few structured questions and map your profile against our 10-sector approval matrix to surface the exact approvals you need.",
  "How long does approval take?": "SWCS targets a 40–60% reduction in end-to-end timelines vs. traditional department-by-department routes. Each approval has its own SLA — visible on your tracker — and escalation triggers automatically if a threshold is breached.",
  "How can I track my application?": "Once your Common Application Form is submitted, every approval appears in your Application Tracker with real-time status, SLA timers, CA/CS feedback, and one-click escalation. Status updates propagate within 60 seconds.",
};

const DEFAULT_RESPONSE = "Thanks for your question. I'll forward this to an NMRDA officer and you'll receive a reply via email within one business day. In the meantime, you can browse the Help Desk above or check the Modules section for platform details.";

const BOT_AV = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="7" width="16" height="12" rx="3"/><circle cx="9.5" cy="13" r="1.2" fill="currentColor"/><circle cx="14.5" cy="13" r="1.2" fill="currentColor"/><path d="M12 3v4M9 19l-1 2M15 19l1 2"/></svg>`;
const USER_AV = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>`;

function nowTime() {
  const d = new Date();
  let h = d.getHours();
  const m = String(d.getMinutes()).padStart(2, '0');
  const ampm = h >= 12 ? 'pm' : 'am';
  h = h % 12 || 12;
  return `${String(h).padStart(2, '0')}:${m} ${ampm}`;
}

function makeMsg({ role, text, time }) {
  const msg = document.createElement('div');
  msg.className = `msg msg--${role}`;
  msg.innerHTML = `
    <span class="msg__av">${role === 'bot' ? BOT_AV : USER_AV}</span>
    <div class="msg__bubble-wrap">
      <div class="msg__bubble"></div>
      <span class="msg__time">${time}</span>
    </div>
  `;
  msg.querySelector('.msg__bubble').textContent = text;
  return msg;
}

function makeTyping() {
  const msg = document.createElement('div');
  msg.className = 'msg msg--bot msg--typing';
  msg.innerHTML = `
    <span class="msg__av">${BOT_AV}</span>
    <div class="msg__bubble-wrap">
      <div class="msg__bubble is-typing"><span></span><span></span><span></span></div>
    </div>
  `;
  return msg;
}

export function initFab() {
  const fab = document.querySelector('[data-fab]');
  const chat = document.querySelector('[data-chat]');
  if (!fab || !chat) return;

  const messages = chat.querySelector('[data-chat-messages]');
  const chips = chat.querySelector('[data-chat-chips]');
  const input = chat.querySelector('[data-chat-input]');
  const sendBtn = chat.querySelector('[data-chat-send]');
  const closeBtn = chat.querySelector('[data-chat-close]');
  const resetBtn = chat.querySelector('[data-chat-reset]');

  const open = () => {
    chat.classList.add('is-open');
    fab.classList.add('is-hidden');
    chat.setAttribute('aria-hidden', 'false');
    fab.setAttribute('aria-expanded', 'true');
    setTimeout(() => input.focus(), 320);
  };
  const close = () => {
    chat.classList.remove('is-open');
    fab.classList.remove('is-hidden');
    chat.setAttribute('aria-hidden', 'true');
    fab.setAttribute('aria-expanded', 'false');
    fab.focus();
  };

  const scrollDown = () => {
    requestAnimationFrame(() => { messages.scrollTop = messages.scrollHeight; });
  };

  const reply = (userText) => {
    const typing = makeTyping();
    messages.appendChild(typing);
    scrollDown();

    const text = RESPONSES[userText] || DEFAULT_RESPONSE;
    const delay = Math.min(900 + text.length * 8, 1800);

    setTimeout(() => {
      typing.remove();
      messages.appendChild(makeMsg({ role: 'bot', text, time: nowTime() }));
      scrollDown();
    }, delay);
  };

  const send = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    messages.appendChild(makeMsg({ role: 'user', text: trimmed, time: nowTime() }));
    scrollDown();
    input.value = '';
    reply(trimmed);
  };

  const reset = () => {
    messages.querySelectorAll('.msg:not(.msg--seed)').forEach(el => el.remove());
    input.value = '';
    input.focus();
  };

  fab.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  resetBtn.addEventListener('click', reset);

  // Any [data-fab-open] anywhere on the page also opens the assistant
  document.querySelectorAll('[data-fab-open]').forEach(el => {
    el.addEventListener('click', open);
  });

  chips.addEventListener('click', (e) => {
    const chip = e.target.closest('[data-chip]');
    if (!chip) return;
    send(chip.dataset.chip);
  });

  sendBtn.addEventListener('click', () => send(input.value));
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send(input.value);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && chat.classList.contains('is-open')) close();
  });
}
