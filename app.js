// ============================================================
//  CATEGORY COLOURS
// ============================================================
const CAT_COLORS = {
  Food:          '#f5845a',
  Transport:     '#5a7ff5',
  Shopping:      '#c8f55a',
  Entertainment: '#f55a9a',
  Health:        '#5af5a0',
  Utilities:     '#f5d45a',
  Rent:          '#a05af5',
  Salary:        '#5af5a0',
  Freelance:     '#c8f55a',
  Investment:    '#5af5e0',
  Other:         '#8e8da0',
};

// ============================================================
//  SEED DATA
// ============================================================
const SEED_TRANSACTIONS = [
  { id: 1,  date: '2025-01-05', description: 'January Salary',       category: 'Salary',        amount: 85000,  type: 'income'  },
  { id: 2,  date: '2025-01-08', description: 'Monthly Rent',          category: 'Rent',          amount: 18000,  type: 'expense' },
  { id: 3,  date: '2025-01-12', description: 'Groceries – D-Mart',    category: 'Food',          amount: 3200,   type: 'expense' },
  { id: 4,  date: '2025-01-15', description: 'Swiggy Order',          category: 'Food',          amount: 620,    type: 'expense' },
  { id: 5,  date: '2025-01-18', description: 'Metro Card Recharge',   category: 'Transport',     amount: 500,    type: 'expense' },
  { id: 6,  date: '2025-01-22', description: 'Netflix Subscription',  category: 'Entertainment', amount: 649,    type: 'expense' },
  { id: 7,  date: '2025-01-25', description: 'Freelance Project',     category: 'Freelance',     amount: 22000,  type: 'income'  },
  { id: 8,  date: '2025-01-28', description: 'Electricity Bill',      category: 'Utilities',     amount: 1850,   type: 'expense' },
  { id: 9,  date: '2025-02-05', description: 'February Salary',       category: 'Salary',        amount: 85000,  type: 'income'  },
  { id: 10, date: '2025-02-07', description: 'Monthly Rent',          category: 'Rent',          amount: 18000,  type: 'expense' },
  { id: 11, date: '2025-02-10', description: 'Zomato – Office Lunch', category: 'Food',          amount: 450,    type: 'expense' },
  { id: 12, date: '2025-02-14', description: 'Amazon Shopping',       category: 'Shopping',      amount: 4200,   type: 'expense' },
  { id: 13, date: '2025-02-18', description: 'Gym Membership',        category: 'Health',        amount: 2500,   type: 'expense' },
  { id: 14, date: '2025-02-20', description: 'Ola Ride',              category: 'Transport',     amount: 320,    type: 'expense' },
  { id: 15, date: '2025-02-25', description: 'SIP – Mutual Funds',    category: 'Investment',    amount: 10000,  type: 'expense' },
  { id: 16, date: '2025-03-04', description: 'March Salary',          category: 'Salary',        amount: 90000,  type: 'income'  },
  { id: 17, date: '2025-03-06', description: 'Monthly Rent',          category: 'Rent',          amount: 18000,  type: 'expense' },
  { id: 18, date: '2025-03-10', description: 'Weekend Dining Out',    category: 'Food',          amount: 2800,   type: 'expense' },
  { id: 19, date: '2025-03-15', description: 'Movie – BookMyShow',    category: 'Entertainment', amount: 880,    type: 'expense' },
  { id: 20, date: '2025-03-18', description: 'Pharmacy',              category: 'Health',        amount: 760,    type: 'expense' },
  { id: 21, date: '2025-03-22', description: 'Freelance – UI Work',   category: 'Freelance',     amount: 35000,  type: 'income'  },
  { id: 22, date: '2025-03-28', description: 'Broadband Bill',        category: 'Utilities',     amount: 999,    type: 'expense' },
  { id: 23, date: '2025-04-04', description: 'April Salary',          category: 'Salary',        amount: 90000,  type: 'income'  },
  { id: 24, date: '2025-04-06', description: 'Monthly Rent',          category: 'Rent',          amount: 18000,  type: 'expense' },
  { id: 25, date: '2025-04-12', description: 'Flipkart – Earphones',  category: 'Shopping',      amount: 2499,   type: 'expense' },
  { id: 26, date: '2025-04-16', description: 'Auto – Weekly Commute', category: 'Transport',     amount: 840,    type: 'expense' },
  { id: 27, date: '2025-04-19', description: 'Doctor Consultation',   category: 'Health',        amount: 600,    type: 'expense' },
  { id: 28, date: '2025-05-05', description: 'May Salary',            category: 'Salary',        amount: 90000,  type: 'income'  },
  { id: 29, date: '2025-05-07', description: 'Monthly Rent',          category: 'Rent',          amount: 18000,  type: 'expense' },
  { id: 30, date: '2025-05-10', description: 'Groceries',             category: 'Food',          amount: 3600,   type: 'expense' },
  { id: 31, date: '2025-05-18', description: 'Spotify Premium',       category: 'Entertainment', amount: 119,    type: 'expense' },
  { id: 32, date: '2025-05-22', description: 'SIP – Mutual Funds',    category: 'Investment',    amount: 10000,  type: 'expense' },
  { id: 33, date: '2025-05-25', description: 'Freelance – Logo',      category: 'Freelance',     amount: 12000,  type: 'income'  },
  { id: 34, date: '2025-06-05', description: 'June Salary',           category: 'Salary',        amount: 92000,  type: 'income'  },
  { id: 35, date: '2025-06-07', description: 'Monthly Rent',          category: 'Rent',          amount: 18000,  type: 'expense' },
  { id: 36, date: '2025-06-12', description: 'Weekend Grocery Run',   category: 'Food',          amount: 2900,   type: 'expense' },
  { id: 37, date: '2025-06-15', description: 'New Sneakers',          category: 'Shopping',      amount: 5499,   type: 'expense' },
  { id: 38, date: '2025-06-20', description: 'Petrol Fill',           category: 'Transport',     amount: 1200,   type: 'expense' },
  { id: 39, date: '2025-06-22', description: 'Annual Health Checkup', category: 'Health',        amount: 2200,   type: 'expense' },
  { id: 40, date: '2025-06-28', description: 'Gas + Internet Bill',   category: 'Utilities',     amount: 1340,   type: 'expense' },
];

// ============================================================
//  STATE
// ============================================================
let state = {
  transactions: JSON.parse(localStorage.getItem('ff_txns') || 'null') || SEED_TRANSACTIONS,
  role:         'admin',
  theme:        localStorage.getItem('ff_theme') || 'dark',
  search:       '',
  filterType:   '',
  filterCat:    '',
  sortBy:       'date-desc',
  editId:       null,
  nextId:       null,
};
state.nextId = Math.max(...state.transactions.map(t => t.id)) + 1;

function saveLocal() {
  localStorage.setItem('ff_txns', JSON.stringify(state.transactions));
}

// ============================================================
//  HELPERS
// ============================================================
const fmt = n => '₹' + n.toLocaleString('en-IN', { maximumFractionDigits: 0 });

function getMonthName(m) {
  return ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][m];
}

function groupByMonth(txns) {
  const map = {};
  txns.forEach(t => {
    const d   = new Date(t.date);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    if (!map[key]) map[key] = { income: 0, expense: 0 };
    if (t.type === 'income') map[key].income += t.amount;
    else                     map[key].expense += t.amount;
  });
  return map;
}

function computeSummary(txns) {
  const income  = txns.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const expense = txns.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  return { income, expense, balance: income - expense };
}

function groupByCat(txns) {
  const map = {};
  txns.filter(t => t.type === 'expense').forEach(t => {
    map[t.category] = (map[t.category] || 0) + t.amount;
  });
  return map;
}

function formatDateStr(dateStr) {
  const d = new Date(dateStr);
  return `${d.getDate()} ${getMonthName(d.getMonth())} ${d.getFullYear()}`;
}

// ============================================================
//  THEME
// ============================================================
function applyTheme() {
  if (state.theme === 'light') {
    document.body.classList.add('light');
    document.getElementById('themeLabel').textContent = 'Light Mode';
  } else {
    document.body.classList.remove('light');
    document.getElementById('themeLabel').textContent = 'Dark Mode';
  }
  // Re-render charts so they pick up new text colours
  renderLineChart();
  renderDonutChart();
}

document.getElementById('themeToggle').addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('ff_theme', state.theme);
  applyTheme();
});

// ============================================================
//  TOAST
// ============================================================
function showToast(msg, type = 'success') {
  const c  = document.getElementById('toastContainer');
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `<span class="toast-icon">${type === 'success' ? '✓' : '✕'}</span>${msg}`;
  c.appendChild(el);
  setTimeout(() => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateX(20px)';
    el.style.transition = '0.3s';
    setTimeout(() => el.remove(), 300);
  }, 2500);
}

// ============================================================
//  SUMMARY CARDS
// ============================================================
function renderCards() {
  const { income, expense, balance } = computeSummary(state.transactions);
  document.getElementById('cardBalance').textContent = fmt(balance);
  document.getElementById('cardIncome').textContent  = fmt(income);
  document.getElementById('cardExpense').textContent = fmt(expense);
  document.getElementById('cardBalanceSub').innerHTML =
    balance >= 0 ? `<span class="up">▲ Net Positive</span>` : `<span class="down">▼ Net Negative</span>`;
  document.getElementById('cardIncomeSub').textContent =
    `${state.transactions.filter(t => t.type === 'income').length} income entries`;
  document.getElementById('cardExpenseSub').textContent =
    `${state.transactions.filter(t => t.type === 'expense').length} expense entries`;
}

// ============================================================
//  CHARTS
// ============================================================
let lineChartInstance  = null;
let donutChartInstance = null;

function chartTextColor() {
  return state.theme === 'light' ? '#6b6b80' : '#8e8da0';
}
function chartGridColor() {
  return state.theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.04)';
}

function renderLineChart() {
  const ctx      = document.getElementById('lineChart').getContext('2d');
  const monthMap = groupByMonth(state.transactions);
  const keys     = Object.keys(monthMap).sort().slice(-6);

  let running = 0;
  const data  = keys.map(k => {
    running += monthMap[k].income - monthMap[k].expense;
    return running;
  });
  const prettyLabels = keys.map(k => {
    const [y, m] = k.split('-');
    return getMonthName(parseInt(m) - 1) + ' ' + y;
  });

  if (lineChartInstance) lineChartInstance.destroy();
  lineChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: prettyLabels,
      datasets: [{
        label: 'Balance',
        data,
        borderColor:     '#c8f55a',
        backgroundColor: 'rgba(200,245,90,0.08)',
        borderWidth: 2, fill: true, tension: 0.4,
        pointBackgroundColor: '#c8f55a', pointRadius: 4, pointHoverRadius: 6,
      }],
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => fmt(c.raw) } } },
      scales: {
        x: { grid: { color: chartGridColor() }, ticks: { color: chartTextColor(), font: { family: 'DM Sans', size: 11 } } },
        y: { grid: { color: chartGridColor() }, ticks: { color: chartTextColor(), font: { family: 'DM Sans', size: 11 }, callback: v => fmt(v) } },
      },
    },
  });
}

function renderDonutChart() {
  const ctx    = document.getElementById('donutChart').getContext('2d');
  const cats   = groupByCat(state.transactions);
  const labels = Object.keys(cats);
  const data   = labels.map(k => cats[k]);
  const colors = labels.map(k => CAT_COLORS[k] || '#8e8da0');

  if (donutChartInstance) donutChartInstance.destroy();
  donutChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: { labels, datasets: [{ data, backgroundColor: colors, borderWidth: 0, hoverOffset: 6 }] },
    options: {
      responsive: true, cutout: '68%',
      plugins: {
        legend: { position: 'bottom', labels: { color: chartTextColor(), font: { family: 'DM Sans', size: 11 }, boxWidth: 10, padding: 12 } },
        tooltip: { callbacks: { label: c => ` ${c.label}: ${fmt(c.raw)}` } },
      },
    },
  });
}

// ============================================================
//  TRANSACTION ROW (desktop table)
// ============================================================
function txnRow(t, showActions) {
  const color      = CAT_COLORS[t.category] || '#8e8da0';
  const actionsCol = showActions && state.role === 'admin'
    ? `<td><div style="display:flex;gap:6px">
         <button class="btn btn-sm btn-secondary" onclick="openEditModal(${t.id})">Edit</button>
         <button class="btn btn-sm btn-danger"    onclick="deleteTxn(${t.id})">Del</button>
       </div></td>`
    : (showActions ? '<td>—</td>' : '');

  return `<tr>
    <td style="color:var(--text2)">${formatDateStr(t.date)}</td>
    <td>${t.description}</td>
    <td><span class="txn-cat"><span class="cat-dot" style="background:${color}"></span>${t.category}</span></td>
    <td class="${t.type === 'income' ? 'amount-pos' : 'amount-neg'}">${t.type === 'income' ? '+' : '-'}${fmt(t.amount)}</td>
    <td><span class="type-badge type-${t.type}">${t.type}</span></td>
    ${actionsCol}
  </tr>`;
}

// ============================================================
//  TRANSACTION CARD (mobile)
// ============================================================
function txnCard(t) {
  const color = CAT_COLORS[t.category] || '#8e8da0';
  const actionsHtml = state.role === 'admin'
    ? `<div class="txn-card-actions">
         <button class="btn btn-sm btn-secondary" onclick="openEditModal(${t.id})">Edit</button>
         <button class="btn btn-sm btn-danger"    onclick="deleteTxn(${t.id})">Del</button>
       </div>`
    : '';

  return `<div class="txn-card-item">
    <div class="txn-card-top">
      <div class="txn-card-desc">${t.description}</div>
      <div class="txn-card-amount ${t.type === 'income' ? 'amount-pos' : 'amount-neg'}">
        ${t.type === 'income' ? '+' : '-'}${fmt(t.amount)}
      </div>
    </div>
    <div class="txn-card-meta">
      <span class="txn-card-date">${formatDateStr(t.date)}</span>
      <span class="txn-cat"><span class="cat-dot" style="background:${color}"></span>${t.category}</span>
      <span class="type-badge type-${t.type}">${t.type}</span>
    </div>
    ${actionsHtml}
  </div>`;
}

// ============================================================
//  RECENT TRANSACTIONS (overview)
// ============================================================
function renderRecentTxns() {
  const recent = [...state.transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  const tbody = document.getElementById('recentTxnBody');
  tbody.innerHTML = recent.length === 0
    ? `<tr><td colspan="5"><div class="empty-state"><div class="empty-icon">📋</div>No transactions yet</div></td></tr>`
    : recent.map(t => txnRow(t, false)).join('');
}

// ============================================================
//  ALL TRANSACTIONS (transactions page)
// ============================================================
function getFilteredTxns() {
  let list = [...state.transactions];
  if (state.search) {
    const q = state.search.toLowerCase();
    list = list.filter(t =>
      t.description.toLowerCase().includes(q) || t.category.toLowerCase().includes(q)
    );
  }
  if (state.filterType) list = list.filter(t => t.type     === state.filterType);
  if (state.filterCat)  list = list.filter(t => t.category === state.filterCat);

  const [field, dir] = state.sortBy.split('-');
  list.sort((a, b) => {
    const av = field === 'date' ? new Date(a.date) : a.amount;
    const bv = field === 'date' ? new Date(b.date) : b.amount;
    return dir === 'asc' ? av - bv : bv - av;
  });
  return list;
}

function renderAllTxns() {
  const list = getFilteredTxns();
  document.getElementById('txnCount').textContent =
    `Showing ${list.length} of ${state.transactions.length} transactions`;

  const emptyHtml = `<div class="empty-state"><div class="empty-icon">🔍</div>No transactions match your filters</div>`;

  // Desktop table
  const tbody = document.getElementById('allTxnBody');
  tbody.innerHTML = list.length === 0
    ? `<tr><td colspan="6">${emptyHtml}</td></tr>`
    : list.map(t => txnRow(t, true)).join('');

  // Mobile cards
  const cardList = document.getElementById('allTxnCards');
  cardList.innerHTML = list.length === 0
    ? emptyHtml
    : list.map(t => txnCard(t)).join('');
}

function populateCategoryFilter() {
  const cats = [...new Set(state.transactions.map(t => t.category))].sort();
  const sel  = document.getElementById('filterCat');
  const curr = sel.value;
  sel.innerHTML = '<option value="">All Categories</option>' +
    cats.map(c => `<option value="${c}" ${c === curr ? 'selected' : ''}>${c}</option>`).join('');
}

// ============================================================
//  EXPORT — CSV & JSON
// ============================================================
function exportCSV() {
  const list = getFilteredTxns();
  const header = ['Date', 'Description', 'Category', 'Type', 'Amount'];
  const rows   = list.map(t => [t.date, `"${t.description}"`, t.category, t.type, t.amount]);
  const csv    = [header, ...rows].map(r => r.join(',')).join('\n');
  downloadFile('finflow-transactions.csv', csv, 'text/csv');
  showToast('Exported as CSV');
  closeExportMenu();
}

function exportJSON() {
  const list = getFilteredTxns();
  const json = JSON.stringify(list, null, 2);
  downloadFile('finflow-transactions.json', json, 'application/json');
  showToast('Exported as JSON');
  closeExportMenu();
}

function downloadFile(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function closeExportMenu() {
  document.getElementById('exportMenu').classList.remove('open');
}

document.getElementById('exportBtn').addEventListener('click', e => {
  e.stopPropagation();
  document.getElementById('exportMenu').classList.toggle('open');
});
document.getElementById('exportCsvBtn').addEventListener('click',  exportCSV);
document.getElementById('exportJsonBtn').addEventListener('click', exportJSON);

// Close export menu when clicking elsewhere
document.addEventListener('click', () => closeExportMenu());

// ============================================================
//  INSIGHTS
// ============================================================
function renderInsights() {
  const cats       = groupByCat(state.transactions);
  const catEntries = Object.entries(cats).sort((a, b) => b[1] - a[1]);
  const topCat     = catEntries[0];
  const { income, expense } = computeSummary(state.transactions);

  if (topCat) {
    document.getElementById('topCatName').textContent = topCat[0];
    document.getElementById('topCatDesc').textContent =
      `${fmt(topCat[1])} total spent • ${((topCat[1] / expense) * 100).toFixed(1)}% of expenses`;
  }

  const rate = income > 0 ? ((income - expense) / income * 100).toFixed(1) : 0;
  document.getElementById('savingsRate').textContent = rate + '%';
  document.getElementById('savingsDesc').textContent =
    rate >= 20 ? '🎯 Great savings discipline!'
    : rate >= 10 ? '👍 Room to grow savings'
    : '⚠️ Try to cut back on expenses';

  const maxVal  = catEntries[0]?.[1] || 1;
  document.getElementById('catBarChart').innerHTML = catEntries.slice(0, 8).map(([cat, amt]) => {
    const pct   = (amt / maxVal * 100).toFixed(1);
    const color = CAT_COLORS[cat] || '#8e8da0';
    return `<div class="insight-bar-row">
      <div class="insight-bar-label">${cat}</div>
      <div class="insight-bar-bg"><div class="insight-bar-fill" style="width:${pct}%;background:${color}"></div></div>
      <div class="insight-bar-amt">${fmt(amt)}</div>
    </div>`;
  }).join('');

  const monthMap = groupByMonth(state.transactions);
  const months   = Object.keys(monthMap).sort().slice(-3);
  document.getElementById('monthCompare').innerHTML = months.map(k => {
    const [y, m] = k.split('-');
    const d      = monthMap[k];
    const net    = d.income - d.expense;
    return `<div class="month-block">
      <div class="month-name">${getMonthName(parseInt(m) - 1)} ${y}</div>
      <div class="month-income">↑ ${fmt(d.income)}</div>
      <div class="month-expense">↓ ${fmt(d.expense)}</div>
      <div class="month-net ${net >= 0 ? 'up' : 'down'}">${net >= 0 ? '+' : ''}${fmt(net)}</div>
    </div>`;
  }).join('');
}

// ============================================================
//  MODAL — ADD / EDIT
// ============================================================
function openAddModal() {
  state.editId = null;
  document.getElementById('modalTitle').textContent = 'Add Transaction';
  document.getElementById('fDescription').value     = '';
  document.getElementById('fAmount').value          = '';
  document.getElementById('fDate').value            = new Date().toISOString().split('T')[0];
  document.getElementById('fType').value            = 'expense';
  document.getElementById('fCategory').value        = 'Food';
  document.getElementById('txnModal').classList.add('open');
}

function openEditModal(id) {
  const t = state.transactions.find(x => x.id === id);
  if (!t) return;
  state.editId = id;
  document.getElementById('modalTitle').textContent = 'Edit Transaction';
  document.getElementById('fDescription').value     = t.description;
  document.getElementById('fAmount').value          = t.amount;
  document.getElementById('fDate').value            = t.date;
  document.getElementById('fType').value            = t.type;
  document.getElementById('fCategory').value        = t.category;
  document.getElementById('txnModal').classList.add('open');
}

function closeModal() {
  document.getElementById('txnModal').classList.remove('open');
  state.editId = null;
}

document.getElementById('modalCancelBtn').addEventListener('click', closeModal);
document.getElementById('txnModal').addEventListener('click', e => {
  if (e.target === document.getElementById('txnModal')) closeModal();
});

document.getElementById('modalSaveBtn').addEventListener('click', () => {
  const desc = document.getElementById('fDescription').value.trim();
  const amt  = parseFloat(document.getElementById('fAmount').value);
  const date = document.getElementById('fDate').value;
  const type = document.getElementById('fType').value;
  const cat  = document.getElementById('fCategory').value;

  if (!desc || isNaN(amt) || amt <= 0 || !date) {
    showToast('Please fill all fields correctly', 'error');
    return;
  }

  if (state.editId) {
    const idx = state.transactions.findIndex(t => t.id === state.editId);
    state.transactions[idx] = { ...state.transactions[idx], description: desc, amount: amt, date, type, category: cat };
    showToast('Transaction updated');
  } else {
    state.transactions.unshift({ id: state.nextId++, description: desc, amount: amt, date, type, category: cat });
    showToast('Transaction added');
  }

  saveLocal();
  closeModal();
  renderAll();
});

function deleteTxn(id) {
  if (!confirm('Delete this transaction?')) return;
  state.transactions = state.transactions.filter(t => t.id !== id);
  saveLocal();
  showToast('Transaction deleted');
  renderAll();
}

// ============================================================
//  ROLE-BASED UI
// ============================================================
function applyRole() {
  const isAdmin = state.role === 'admin';
  document.querySelectorAll('.admin-only').forEach(el => {
    el.style.display = isAdmin ? '' : 'none';
  });
  const badge = document.getElementById('roleBadge');
  badge.textContent = `● ${isAdmin ? 'Admin' : 'Viewer'}`;
  badge.className   = `role-badge${isAdmin ? '' : ' viewer'}`;
}

document.getElementById('roleSelect').addEventListener('change', e => {
  state.role = e.target.value;
  applyRole();
  renderAllTxns();
  showToast(`Switched to ${state.role} role`);
});

// ============================================================
//  NAVIGATION
// ============================================================
function showView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('view-' + name).classList.add('active');
  document.querySelector(`[data-view="${name}"]`).classList.add('active');
  document.getElementById('topbarTitle').textContent =
    { overview: 'Overview', transactions: 'Transactions', insights: 'Insights' }[name];
  closeSidebar();
}

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => showView(item.dataset.view));
});

// ============================================================
//  MOBILE SIDEBAR
// ============================================================
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlayClose').classList.remove('open');
}

document.getElementById('mobileMenuBtn').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlayClose').classList.toggle('open');
});
document.getElementById('overlayClose').addEventListener('click', closeSidebar);

// ============================================================
//  FILTER / SEARCH
// ============================================================
document.getElementById('searchInput').addEventListener('input',  e => { state.search     = e.target.value; renderAllTxns(); });
document.getElementById('filterType').addEventListener('change',  e => { state.filterType = e.target.value; renderAllTxns(); });
document.getElementById('filterCat').addEventListener('change',   e => { state.filterCat  = e.target.value; renderAllTxns(); });
document.getElementById('sortBy').addEventListener('change',      e => { state.sortBy     = e.target.value; renderAllTxns(); });
document.getElementById('addTxnBtn').addEventListener('click', openAddModal);

// ============================================================
//  MASTER RENDER
// ============================================================
function renderAll() {
  renderCards();
  renderLineChart();
  renderDonutChart();
  renderRecentTxns();
  populateCategoryFilter();
  renderAllTxns();
  renderInsights();
  applyRole();
}

// ============================================================
//  INIT
// ============================================================
document.getElementById('topbarDate').textContent =
  new Date().toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });

applyTheme();
renderAll();