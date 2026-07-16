// DOM Elements
const notificationBtn = document.getElementById('notificationBtn');
const profileBtn = document.getElementById('profileBtn');
const notificationBadge = document.getElementById('notificationBadge');
const notificationDropdown = document.getElementById('notificationDropdown');
const profileDropdown = document.getElementById('profileDropdown');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');
const navItems = document.querySelectorAll('.nav-item');
const moduleContent = document.getElementById('moduleContent');
const markAllRead = document.getElementById('markAllRead');

// =====================
// Sidebar Toggle
// =====================
hamburgerBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

// =====================
// Home Link - Go to Dashboard
// =====================
const homeLink = document.getElementById('homeLink');
if (homeLink) {
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        navItems.forEach(nav => nav.classList.remove('active'));
        const dashboardNav = document.querySelector('.nav-item[data-module="dashboard"]');
        if (dashboardNav) {
            dashboardNav.classList.add('active');
            moduleContent.innerHTML = `
                <h2>${moduleData.dashboard.title}</h2>
                ${moduleData.dashboard.content}
            `;
        }
    });
}

// =====================
// Module Navigation
// =====================
const moduleData = {
    dashboard: {
        title: 'Dashboard',
        content: `
            <!-- Stats Cards Row -->
            <div class="stats-row">
                <div class="stat-card">
                    <div class="stat-icon stat-icon-members">
                        <i class="fas fa-users"></i>
                    </div>
                    <div class="stat-info">
                        <span class="stat-number" id="statTotalMembers">0</span>
                        <span class="stat-label">Total Members</span>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon stat-icon-active">
                        <i class="fas fa-heartbeat"></i>
                    </div>
                    <div class="stat-info">
                        <span class="stat-number" id="statActiveMembers">0</span>
                        <span class="stat-label">Active Members</span>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon stat-icon-earnings">
                        <i class="fas fa-dollar-sign"></i>
                    </div>
                    <div class="stat-info">
                        <span class="stat-number" id="statEarnings">₱0</span>
                        <span class="stat-label">This Month Earnings</span>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon stat-icon-checkin">
                        <i class="fas fa-sign-in-alt"></i>
                    </div>
                    <div class="stat-info">
                        <span class="stat-number" id="statCheckins">0</span>
                        <span class="stat-label">Today's Check-ins</span>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon stat-icon-checkout">
                        <i class="fas fa-sign-out-alt"></i>
                    </div>
                    <div class="stat-info">
                        <span class="stat-number" id="statCheckouts">0</span>
                        <span class="stat-label">Today's Check-outs</span>
                    </div>
                </div>
            </div>

            <!-- Bottom Row: Recent Activity + Quick Actions + Membership Overview -->
            <div class="dashboard-bottom">
                <!-- Recent Activity -->
                <div class="dash-card recent-activity">
                    <div class="dash-card-header">
                        <h3><i class="fas fa-clock"></i> Recent Activity</h3>
                        <a href="#" class="view-all">View All</a>
                    </div>
                    <ul class="activity-list" id="activityList">
                        <li class="activity-item">
                            <div class="activity-dot dot-checkin"></div>
                            <div class="activity-info">
                                <p>No recent activity</p>
                                <span class="activity-time">—</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <!-- Quick Actions -->
                <div class="dash-card quick-actions">
                    <div class="dash-card-header">
                        <h3><i class="fas fa-bolt"></i> Quick Actions</h3>
                    </div>
                    <div class="quick-actions-grid">
                        <button class="quick-action-btn">
                            <i class="fas fa-user-plus"></i>
                            <span>Add Member</span>
                        </button>
                        <button class="quick-action-btn">
                            <i class="fas fa-calendar-check"></i>
                            <span>Record Attendance</span>
                        </button>
                        <button class="quick-action-btn">
                            <i class="fas fa-credit-card"></i>
                            <span>Process Payment</span>
                        </button>
                        <button class="quick-action-btn">
                            <i class="fas fa-file-alt"></i>
                            <span>Generate Report</span>
                        </button>
                    </div>
                </div>

                <!-- Membership Overview -->
                <div class="dash-card membership-overview">
                    <div class="dash-card-header">
                        <h3><i class="fas fa-id-card"></i> Membership Overview</h3>
                    </div>
                    <div class="plan-stats">
                        <div class="plan-item">
                            <div class="plan-info">
                                <span class="plan-name">Premium</span>
                                <span class="plan-count" id="planPremium">0 members</span>
                            </div>
                            <div class="plan-bar">
                                <div class="plan-fill premium" style="width: 0%"></div>
                            </div>
                        </div>
                        <div class="plan-item">
                            <div class="plan-info">
                                <span class="plan-name">Standard</span>
                                <span class="plan-count" id="planStandard">0 members</span>
                            </div>
                            <div class="plan-bar">
                                <div class="plan-fill standard" style="width: 0%"></div>
                            </div>
                        </div>
                        <div class="plan-item">
                            <div class="plan-info">
                                <span class="plan-name">Basic</span>
                                <span class="plan-count" id="planBasic">0 members</span>
                            </div>
                            <div class="plan-bar">
                                <div class="plan-fill basic" style="width: 0%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    membership: {
        title: 'Membership',
        content: 'Manage gym memberships, view member details, and handle membership plans.'
    },
    attendance: {
        title: 'Attendance',
        content: 'Track and manage member attendance records and check-ins.'
    },
    reports: {
        title: 'Reports',
        content: 'Generate and view reports on gym performance, membership trends, and more.'
    }
};

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        const module = item.dataset.module;
        if (moduleData[module]) {
            if (module === 'dashboard') {
                moduleContent.innerHTML = `
                    <h2>${moduleData[module].title}</h2>
                    ${moduleData[module].content}
                `;
            } else {
                moduleContent.innerHTML = `
                    <h2>${moduleData[module].title}</h2>
                    <p>${moduleData[module].content}</p>
                `;
            }
        }
    });
});

// =====================
// Notification Dropdown Toggle
// =====================
notificationBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    profileDropdown.classList.remove('show');
    notificationDropdown.classList.toggle('show');
});

// =====================
// Profile Dropdown Toggle
// =====================
profileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    notificationDropdown.classList.remove('show');
    profileDropdown.classList.toggle('show');
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!notificationBtn.contains(e.target) && !notificationDropdown.contains(e.target)) {
        notificationDropdown.classList.remove('show');
    }
    if (!profileBtn.contains(e.target) && !profileDropdown.contains(e.target)) {
        profileDropdown.classList.remove('show');
    }
});

// Prevent dropdowns from closing when clicking inside them
notificationDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
});

profileDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
});

// =====================
// Profile Item Click Handler
// =====================
const profileItems = document.querySelectorAll('.profile-item');
profileItems.forEach(item => {
    item.addEventListener('click', () => {
        const title = item.querySelector('.profile-item-title').textContent;
        const module = item.dataset.profile;

        // Close profile dropdown
        profileDropdown.classList.remove('show');

        if (module === 'profile') {
            showProfileView();
        } else if (module === 'security') {
            showSecurityView();
        } else if (module === 'activity') {
            showActivityLogView();
        } else {
            moduleContent.innerHTML = `
                <h2><i class="fas fa-cog"></i> ${title}</h2>
                <p>${title} coming soon!</p>
            `;
        }
    });
});

// =====================
// Profile View
// =====================
function showProfileView() {
    moduleContent.innerHTML = `
        <h2><i class="fas fa-user-circle"></i> Profile</h2>
        <div class="profile-view" id="profileViewContainer">
            <div class="profile-view-card">
                <div class="profile-view-header">
                    <div class="profile-view-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="profile-view-info">
                        <h3>Admin</h3>
                        <span class="profile-view-role">Admin</span>
                    </div>
                </div>
                <div class="profile-view-body" id="profileViewBody">
                    <div class="profile-field">
                        <label>Full Name</label>
                        <p class="profile-field-value" id="pfName">Admin</p>
                    </div>
                    <div class="profile-field">
                        <label>Email Address</label>
                        <p class="profile-field-value" id="pfEmail">admin@bruskogym.com</p>
                    </div>
                    <div class="profile-field">
                        <label>Phone Number</label>
                        <p class="profile-field-value" id="pfPhone">+63 912 345 6789</p>
                    </div>
                    <div class="profile-field">
                        <label>Role</label>
                        <p><span class="profile-badge" id="pfRole">Admin</span></p>
                    </div>
                    <div class="profile-field">
                        <label>Member Since</label>
                        <p class="profile-field-value" id="pfSince">January 2026</p>
                    </div>
                </div>
                <div class="profile-view-footer" id="profileViewFooter">
                    <button class="profile-edit-btn" id="profileEditBtn"><i class="fas fa-edit"></i> Edit Profile</button>
                </div>
            </div>
        </div>
    `;

    setTimeout(() => {
        const editBtn = document.getElementById('profileEditBtn');
        if (editBtn) {
            editBtn.addEventListener('click', enterProfileEditMode);
        }
    }, 50);
}

function enterProfileEditMode() {
    const body = document.getElementById('profileViewBody');
    const footer = document.getElementById('profileViewFooter');
    const name = document.getElementById('pfName')?.textContent || 'Admin';
    const email = document.getElementById('pfEmail')?.textContent || 'admin@bruskogym.com';
    const phone = document.getElementById('pfPhone')?.textContent || '+63 912 345 6789';
    const role = document.getElementById('pfRole')?.textContent || 'Admin';

    body.innerHTML = `
        <div class="profile-field">
            <label>Full Name</label>
            <input type="text" class="profile-input" id="editName" value="${name}" />
        </div>
        <div class="profile-field">
            <label>Email Address</label>
            <input type="email" class="profile-input" id="editEmail" value="${email}" />
        </div>
        <div class="profile-field">
            <label>Phone Number</label>
            <input type="text" class="profile-input" id="editPhone" value="${phone}" />
        </div>
        <div class="profile-field">
            <label>Role</label>
            <input type="text" class="profile-input" id="editRole" value="${role}" disabled />
        </div>
        <div class="profile-field">
            <label>Member Since</label>
            <input type="text" class="profile-input" id="editSince" value="January 2026" disabled />
        </div>
    `;

    footer.innerHTML = `
        <button class="profile-save-btn" id="profileSaveBtn"><i class="fas fa-save"></i> Save Changes</button>
        <button class="profile-cancel-btn" id="profileCancelBtn"><i class="fas fa-times"></i> Cancel</button>
    `;

    document.getElementById('profileSaveBtn').addEventListener('click', function() {
        const newName = document.getElementById('editName').value;
        const newEmail = document.getElementById('editEmail').value;
        const newPhone = document.getElementById('editPhone').value;
        const newRole = document.getElementById('editRole').value;

        body.innerHTML = `
            <div class="profile-field">
                <label>Full Name</label>
                <p class="profile-field-value" id="pfName">${newName}</p>
            </div>
            <div class="profile-field">
                <label>Email Address</label>
                <p class="profile-field-value" id="pfEmail">${newEmail}</p>
            </div>
            <div class="profile-field">
                <label>Phone Number</label>
                <p class="profile-field-value" id="pfPhone">${newPhone}</p>
            </div>
            <div class="profile-field">
                <label>Role</label>
                <p><span class="profile-badge" id="pfRole">${newRole}</span></p>
            </div>
            <div class="profile-field">
                <label>Member Since</label>
                <p class="profile-field-value" id="pfSince">January 2026</p>
            </div>
        `;

        footer.innerHTML = `
            <button class="profile-edit-btn" id="profileEditBtn"><i class="fas fa-edit"></i> Edit Profile</button>
        `;

        document.getElementById('profileEditBtn').addEventListener('click', enterProfileEditMode);
    });

    document.getElementById('profileCancelBtn').addEventListener('click', showProfileView);
}

// =====================
// Security View
// =====================
function showSecurityView() {
    moduleContent.innerHTML = `
        <h2><i class="fas fa-lock"></i> Security</h2>
        <div class="profile-view">
            <div class="profile-view-card">
                <div class="profile-view-header">
                    <div class="profile-view-avatar" style="background: rgba(255,107,107,0.15); color: #ff6b6b;">
                        <i class="fas fa-lock"></i>
                    </div>
                    <div class="profile-view-info">
                        <h3>Security Settings</h3>
                        <span class="profile-view-role">Manage your account security</span>
                    </div>
                </div>
                <div class="profile-view-body" id="securityBody">
                    <div class="profile-field">
                        <label>Current Password</label>
                        <input type="password" class="profile-input" id="secCurrentPw" placeholder="Enter current password" />
                    </div>
                    <div class="profile-field">
                        <label>New Password</label>
                        <input type="password" class="profile-input" id="secNewPw" placeholder="Enter new password" />
                    </div>
                    <div class="profile-field">
                        <label>Confirm New Password</label>
                        <input type="password" class="profile-input" id="secConfirmPw" placeholder="Confirm new password" />
                    </div>
                    <div class="security-info">
                        <div class="security-info-icon"><i class="fas fa-info-circle"></i></div>
                        <p>Password must be at least 8 characters and include a number and a special character.</p>
                    </div>
                </div>
                <div class="profile-view-footer">
                    <button class="profile-save-btn" id="secChangeBtn"><i class="fas fa-key"></i> Change Password</button>
                </div>
            </div>
        </div>
    `;

    setTimeout(() => {
        const secBtn = document.getElementById('secChangeBtn');
        if (secBtn) {
            secBtn.addEventListener('click', function() {
                const current = document.getElementById('secCurrentPw').value;
                const newPw = document.getElementById('secNewPw').value;
                const confirmPw = document.getElementById('secConfirmPw').value;

                if (!current || !newPw || !confirmPw) {
                    alert('Please fill in all password fields.');
                    return;
                }
                if (newPw !== confirmPw) {
                    alert('New passwords do not match.');
                    return;
                }
                if (newPw.length < 8) {
                    alert('Password must be at least 8 characters.');
                    return;
                }
                alert('✅ Password changed successfully!');
                document.getElementById('secCurrentPw').value = '';
                document.getElementById('secNewPw').value = '';
                document.getElementById('secConfirmPw').value = '';
            });
        }
    }, 50);
}

// =====================
// Activity Log View (replaces Appearance)
// =====================
function showActivityLogView() {
    moduleContent.innerHTML = `
        <h2><i class="fas fa-history"></i> Activity Log</h2>
        <div class="profile-view">
            <div class="profile-view-card">
                <div class="profile-view-header">
                    <div class="profile-view-avatar" style="background: rgba(46,213,115,0.15); color: #2ed573;">
                        <i class="fas fa-history"></i>
                    </div>
                    <div class="profile-view-info">
                        <h3>Recent Activity Log</h3>
                        <span class="profile-view-role">Track all admin actions and system events</span>
                    </div>
                </div>
                <div class="profile-view-body" style="padding: 20px 30px;">
                    <div class="activity-log-list" id="activityLogList">
                        <div class="activity-log-item">
                            <div class="activity-log-dot" style="background: #f5c518;"></div>
                            <div class="activity-log-content">
                                <p><strong>Admin</strong> logged in</p>
                                <span class="activity-log-time">Just now</span>
                            </div>
                        </div>
                        <div class="activity-log-item">
                            <div class="activity-log-dot" style="background: #2ed573;"></div>
                            <div class="activity-log-content">
                                <p>Dashboard was viewed</p>
                                <span class="activity-log-time">2 minutes ago</span>
                            </div>
                        </div>
                        <div class="activity-log-item">
                            <div class="activity-log-dot" style="background: #36a4eb;"></div>
                            <div class="activity-log-content">
                                <p>System settings were updated</p>
                                <span class="activity-log-time">1 hour ago</span>
                            </div>
                        </div>
                        <div class="activity-log-item">
                            <div class="activity-log-dot" style="background: #ff6b6b;"></div>
                            <div class="activity-log-content">
                                <p>Password was changed</p>
                                <span class="activity-log-time">3 hours ago</span>
                            </div>
                        </div>
                        <div class="activity-log-item">
                            <div class="activity-log-dot" style="background: #a855f7;"></div>
                            <div class="activity-log-content">
                                <p>New member <strong>John Doe</strong> was added</p>
                                <span class="activity-log-time">1 day ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="profile-view-footer">
                    <button class="profile-edit-btn" id="clearLogBtn"><i class="fas fa-trash"></i> Clear Log</button>
                </div>
            </div>
        </div>
    `;

    setTimeout(() => {
        const clearBtn = document.getElementById('clearLogBtn');
        if (clearBtn) {
            clearBtn.addEventListener('click', function() {
                if (confirm('Clear all activity logs?')) {
                    document.getElementById('activityLogList').innerHTML = `
                        <div class="activity-log-empty">
                            <i class="fas fa-inbox"></i>
                            <p>No activity logs available.</p>
                        </div>
                    `;
                }
            });
        }
    }, 50);
}

// =====================
// Logout Click Handler
// =====================
const logoutLink = document.getElementById('logoutLink');
if (logoutLink) {
    logoutLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (confirm('Are you sure you want to logout?')) {
            window.location.href = '../index.php';
        }
    });
}

// =====================
// Mark All as Read
// =====================
markAllRead.addEventListener('click', () => {
    const unreadItems = document.querySelectorAll('.notification-item.unread');
    unreadItems.forEach(item => {
        item.classList.remove('unread');
    });
    notificationBadge.style.display = 'none';
});

// =====================
// Load Dashboard on Page Load
// =====================
document.addEventListener('DOMContentLoaded', () => {
    const dashboardNav = document.querySelector('.nav-item[data-module="dashboard"]');
    if (dashboardNav) {
        dashboardNav.click();
    }
});