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
            <div class="dashboard-shell">
            <div class="stats-row">
                <div class="stat-card">
                    <div class="stat-icon stat-icon-members">
                        <i class="fas fa-users"></i>
                    </div>
                    <div class="stat-info">
                        <span class="stat-number" id="statTotalMembers">0</span>
                        <span class="stat-label">Members</span>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon stat-icon-active">
                        <i class="fas fa-heartbeat"></i>
                    </div>
                    <div class="stat-info">
                        <span class="stat-number" id="statActiveMembers">0</span>
                        <span class="stat-label">Active</span>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon stat-icon-earnings">
                        <i class="fas fa-dollar-sign"></i>
                    </div>
                    <div class="stat-info">
                        <span class="stat-number" id="statEarnings">₱0</span>
                        <span class="stat-label">Monthly Revenue</span>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon stat-icon-checkout">
                        <i class="fas fa-calendar-alt"></i>
                    </div>
                    <div class="stat-info">
                        <span class="stat-number" id="statExpiringMembers">0</span>
                        <span class="stat-label">Expiring Soon</span>
                    </div>
                </div>
            </div>

            <div class="dashboard-bottom">
                <div class="dash-card recent-activity">
                    <div class="dash-card-header">
                        <h3>Activity</h3>
                    </div>
                    <ul class="activity-list" id="activityList">
                        <li class="activity-item">
                            <div class="activity-dot dot-neutral"></div>
                            <div class="activity-info">
                                <p>Loading overview</p>
                                <span class="activity-time">Please wait</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="dash-card membership-overview">
                    <div class="dash-card-header">
                        <h3>Plans</h3>
                    </div>
                    <div class="plan-stats compact-plan-stats">
                        <div class="plan-item">
                            <div class="plan-info">
                                <span class="plan-name">Premium</span>
                                <span class="plan-count" id="planPremium">0</span>
                            </div>
                            <div class="plan-bar">
                                <div class="plan-fill premium" id="planPremiumFill" style="width: 0%"></div>
                            </div>
                        </div>
                        <div class="plan-item">
                            <div class="plan-info">
                                <span class="plan-name">Standard</span>
                                <span class="plan-count" id="planStandard">0</span>
                            </div>
                            <div class="plan-bar">
                                <div class="plan-fill standard" id="planStandardFill" style="width: 0%"></div>
                            </div>
                        </div>
                        <div class="plan-item">
                            <div class="plan-info">
                                <span class="plan-name">Basic</span>
                                <span class="plan-count" id="planBasic">0</span>
                            </div>
                            <div class="plan-bar">
                                <div class="plan-fill basic" id="planBasicFill" style="width: 0%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        `
    },
    membership: {
        title: 'Membership',
        content: `
            <div class="membership-container">
                <div class="membership-summary" id="membershipSummary"></div>
                <div class="membership-tabs">
                    <button class="mem-tab active" data-memtab="all-members">
                        Members
                    </button>
                    <button class="mem-tab" data-memtab="plans">
                        Plans
                    </button>
                    <button class="mem-tab" data-memtab="add-member">
                        Add Member
                    </button>
                </div>

                <div class="mem-tab-content active" id="memTabAllMembers">
                    <div class="mem-toolbar">
                        <div class="mem-search-wrapper">
                            <i class="fas fa-search mem-search-icon"></i>
                            <input type="text" class="mem-search-input" id="memSearchInput" placeholder="Search members" />
                        </div>
                        <div class="mem-filter-group">
                            <select class="mem-filter-select" id="memPlanFilter">
                                <option value="all">All Plans</option>
                                <option value="Premium">Premium</option>
                                <option value="Standard">Standard</option>
                                <option value="Basic">Basic</option>
                            </select>
                            <select class="mem-filter-select" id="memStatusFilter">
                                <option value="all">All Status</option>
                                <option value="Active">Active</option>
                                <option value="Expired">Expired</option>
                                <option value="Pending">Pending</option>
                            </select>
                            <button class="mem-refresh-btn" id="memRefreshBtn" title="Refresh">
                                <i class="fas fa-sync-alt"></i>
                            </button>
                        </div>
                    </div>

                    <div class="mem-table-wrapper">
                        <table class="mem-table">
                            <thead>
                                <tr>
                                    <th>Member</th>
                                    <th>Contact</th>
                                    <th>Plan</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody id="memTableBody">
                                <!-- Rows rendered by JS -->
                            </tbody>
                        </table>
                    </div>

                    <div class="mem-table-footer">
                        <span class="mem-total-count" id="memTotalCount">0 members</span>
                        <div class="mem-pagination">
                            <button class="mem-page-btn" id="memPrevPage" disabled><i class="fas fa-chevron-left"></i></button>
                            <span class="mem-page-info" id="memPageInfo">Page 1 of 1</span>
                            <button class="mem-page-btn" id="memNextPage" disabled><i class="fas fa-chevron-right"></i></button>
                        </div>
                    </div>
                </div>

                <div class="mem-tab-content" id="memTabPlans">
                    <div class="plans-header">
                        <h3>Plans</h3>
                        <button class="plans-add-btn" id="plansAddBtn"><i class="fas fa-plus"></i> Add Plan</button>
                    </div>
                    <div class="plans-grid" id="plansGrid">
                    </div>
                </div>

                <div class="mem-tab-content" id="memTabAddMember">
                    <div class="add-member-form-wrapper">
                        <h3>Add Member</h3>
                        <div class="member-wizard">
                            <div class="member-wizard-steps">
                                <div class="member-step active" data-step-indicator="1">
                                    <span class="member-step-number">1</span>
                                    <span class="member-step-label">Details</span>
                                </div>
                                <div class="member-step" data-step-indicator="2">
                                    <span class="member-step-number">2</span>
                                    <span class="member-step-label">Plan</span>
                                </div>
                                <div class="member-step" data-step-indicator="3">
                                    <span class="member-step-number">3</span>
                                    <span class="member-step-label">Payment</span>
                                </div>
                                <div class="member-step" data-step-indicator="4">
                                    <span class="member-step-number">4</span>
                                    <span class="member-step-label">Discount</span>
                                </div>
                                <div class="member-step" data-step-indicator="5">
                                    <span class="member-step-number">5</span>
                                    <span class="member-step-label">Finish</span>
                                </div>
                            </div>

                            <form id="addMemberForm" class="add-member-form member-wizard-form">
                                <input type="hidden" id="amPlan" />

                                <div class="wizard-step active" data-step="1">
                                    <div class="wizard-step-header">
                                        <h4>Member Details</h4>
                                        <p>Enter the personal information first.</p>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="amFirstName">First Name <span class="required">*</span></label>
                                            <input type="text" id="amFirstName" class="form-input" placeholder="Enter first name" required />
                                        </div>
                                        <div class="form-group">
                                            <label for="amLastName">Last Name <span class="required">*</span></label>
                                            <input type="text" id="amLastName" class="form-input" placeholder="Enter last name" required />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="amEmail">Email <span class="required">*</span></label>
                                            <input type="email" id="amEmail" class="form-input" placeholder="Enter email address" required />
                                        </div>
                                        <div class="form-group">
                                            <label for="amPhone">Phone <span class="required">*</span></label>
                                            <input type="text" id="amPhone" class="form-input" placeholder="Enter phone number" required />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="amAddress">Address</label>
                                            <input type="text" id="amAddress" class="form-input" placeholder="Enter address" />
                                        </div>
                                        <div class="form-group">
                                            <label for="amGender">Gender</label>
                                            <select id="amGender" class="form-input">
                                                <option value="">Prefer not to say</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="amDOB">Date of Birth</label>
                                            <input type="date" id="amDOB" class="form-input" />
                                        </div>
                                        <div class="form-group">
                                            <label for="amNotes">Notes</label>
                                            <textarea id="amNotes" class="form-input form-textarea" placeholder="Any additional notes..."></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div class="wizard-step" data-step="2">
                                    <div class="wizard-step-header">
                                        <h4>Membership Plan</h4>
                                        <p>Choose the plan and duration.</p>
                                    </div>
                                    <div class="wizard-plan-grid" id="amPlanOptions"></div>
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="amDuration">Duration <span class="required">*</span></label>
                                            <select id="amDuration" class="form-input" required disabled>
                                                <option value="1">Choose a plan first</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Total Before Discount</label>
                                            <div class="wizard-total-box" id="amPlanSummary">Select a plan first.</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="wizard-step" data-step="3">
                                    <div class="wizard-step-header">
                                        <h4>Payment Verification</h4>
                                        <p>Select how the member will pay and verify the transaction.</p>
                                    </div>
                                    <div class="payment-method-grid">
                                        <label class="payment-method-card">
                                            <input type="radio" name="amPaymentMethod" value="gcash" />
                                            <span class="payment-method-title">GCash</span>
                                            <span class="payment-method-note">Scan QR then verify the reference number.</span>
                                        </label>
                                        <label class="payment-method-card">
                                            <input type="radio" name="amPaymentMethod" value="paypal" />
                                            <span class="payment-method-title">PayPal</span>
                                            <span class="payment-method-note">Use PayPal QR or checkout reference.</span>
                                        </label>
                                        <label class="payment-method-card">
                                            <input type="radio" name="amPaymentMethod" value="cash" />
                                            <span class="payment-method-title">Cash Only</span>
                                            <span class="payment-method-note">Verify the cash payment before continuing.</span>
                                        </label>
                                    </div>
                                    <div class="payment-qr-grid">
                                        <div class="payment-qr-card" data-payment-panel="gcash">
                                            <div class="payment-qr-pattern"></div>
                                            <strong>GCash QR</strong>
                                            <span>Use for wallet payments.</span>
                                        </div>
                                        <div class="payment-qr-card" data-payment-panel="paypal">
                                            <div class="payment-qr-pattern paypal"></div>
                                            <strong>PayPal QR</strong>
                                            <span>Use for PayPal checkout.</span>
                                        </div>
                                        <div class="payment-qr-card" data-payment-panel="cash">
                                            <div class="payment-cash-badge"><i class="fas fa-money-bill-wave"></i></div>
                                            <strong>Cash Payment</strong>
                                            <span>Accept cash and confirm it below.</span>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group payment-reference-group" id="amPaymentReferenceGroup">
                                            <label for="amPaymentReference" id="amPaymentReferenceLabel">Reference Number <span class="required">*</span></label>
                                            <input type="text" id="amPaymentReference" class="form-input" placeholder="Enter transaction or receipt reference" />
                                        </div>
                                        <div class="form-group">
                                            <label for="amPaymentAmount">Amount Received</label>
                                            <input type="text" id="amPaymentAmount" class="form-input" placeholder="Auto-calculated" readonly />
                                        </div>
                                    </div>
                                    <label class="payment-verify-check">
                                        <input type="checkbox" id="amPaymentVerified" />
                                        <span>Payment has been checked and verified.</span>
                                    </label>
                                </div>

                                <div class="wizard-step" data-step="4">
                                    <div class="wizard-step-header">
                                        <h4>Discount</h4>
                                        <p>Apply a discount before finishing the registration.</p>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="amDiscountType">Discount Type</label>
                                            <select id="amDiscountType" class="form-input">
                                                <option value="none">No Discount</option>
                                                <option value="student">Student - 10%</option>
                                                <option value="senior">Senior - 20%</option>
                                                <option value="promo">Promo - ₱300</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="amDiscountNote">Discount Note</label>
                                            <input type="text" id="amDiscountNote" class="form-input" placeholder="Optional note or reference" />
                                        </div>
                                    </div>
                                    <div class="discount-summary-card" id="amDiscountSummary"></div>
                                </div>

                                <div class="wizard-step" data-step="5">
                                    <div class="wizard-step-header">
                                        <h4>Finish</h4>
                                        <p>Review the information before adding the member.</p>
                                    </div>
                                    <div class="wizard-review-grid" id="amReviewContent"></div>
                                </div>

                                <div class="form-actions wizard-actions">
                                    <button type="button" class="form-reset-btn" id="amPrevBtn">Back</button>
                                    <button type="button" class="form-reset-btn" id="amResetWizardBtn">Reset</button>
                                    <button type="button" class="form-submit-btn" id="amNextBtn">Next</button>
                                    <button type="submit" class="form-submit-btn" id="amSubmitBtn">Finish & Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `
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
            moduleContent.innerHTML = `
                <h2>${moduleData[module].title}</h2>
                ${moduleData[module].content}
            `;
            if (module === 'dashboard') {
                setTimeout(renderDashboardOverview, 50);
            }
            if (module === 'membership') {
                setTimeout(initMembership, 50);
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

// ==========================================================
// ===================== MEMBERSHIP MODULE ==================
// ==========================================================

// =====================
// Sample Data
// =====================
const memberNames = [
    'Juan Dela Cruz', 'Maria Santos', 'Pedro Gonzales', 'Ana Reyes', 'Carlos Lopez',
    'Sofia Martinez', 'Miguel Torres', 'Angela Villanueva', 'David Ramos', 'Isabella Garcia',
    'Jose Rizal', 'Gabriela Silang', 'Andres Bonifacio', 'Emilio Aguinaldo', 'Luna Castilla',
    'Rafael Mendoza', 'Patricia Flores', 'Enrique Navarro', 'Camille Ortega', 'Dominic Hernandez'
];
const memberEmails = [
    'juan@email.com', 'maria@email.com', 'pedro@email.com', 'ana@email.com', 'carlos@email.com',
    'sofia@email.com', 'miguel@email.com', 'angela@email.com', 'david@email.com', 'isabella@email.com',
    'jose@email.com', 'gabriela@email.com', 'andres@email.com', 'emilio@email.com', 'luna@email.com',
    'rafael@email.com', 'patricia@email.com', 'enrique@email.com', 'camille@email.com', 'dominic@email.com'
];
const memberPhones = [
    '+63 912 111 1111', '+63 912 222 2222', '+63 912 333 3333', '+63 912 444 4444', '+63 912 555 5555',
    '+63 912 666 6666', '+63 912 777 7777', '+63 912 888 8888', '+63 912 999 9999', '+63 913 000 0001',
    '+63 913 111 1112', '+63 913 222 2223', '+63 913 333 3334', '+63 913 444 4445', '+63 913 555 5556',
    '+63 913 666 6667', '+63 913 777 7778', '+63 913 888 8889', '+63 913 999 9990', '+63 914 000 0001'
];

// Generate a unique ID
let memberIdCounter = 20;
function generateMemberId() {
    return ++memberIdCounter;
}

// Helper: generate random date within range
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function formatDate(d) {
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const year = d.getFullYear();
    return `${month}/${day}/${year}`;
}

function parseDisplayDate(value) {
    if (!value || !value.includes('/')) return null;
    const [month, day, year] = value.split('/').map(Number);
    if (!month || !day || !year) return null;
    return new Date(year, month - 1, day);
}

// Plans definition
const membershipPlans = [
    {
        id: 'plan-premium',
        name: 'Premium',
        price: 200,
        period: 'month',
        color: '#f5c518',
        features: ['Unlimited gym access', 'Free personal training (4x/month)', 'Access to all classes', 'Free locker & towel', 'Nutrition consultation', 'Priority booking'],
        popular: true
    },
    {
        id: 'plan-standard',
        name: 'Standard',
        price: 120,
        period: 'week',
        color: '#36a4eb',
        features: ['Unlimited gym access', 'Group classes included', 'Free locker & towel', '1 free PT session/month', 'Access to sauna'],
        popular: false
    },
    {
        id: 'plan-basic',
        name: 'Basic',
        price: 80,
        period: 'day',
        color: '#2ed573',
        features: ['Gym access (6 AM - 12 PM)', 'Basic equipment usage', 'Locker rental available', 'No class access', 'Weekend access'],
        popular: false
    }
];

// Build sample members
const sampleMembers = [];
const statuses = ['Active', 'Active', 'Active', 'Active', 'Active', 'Active', 'Active', 'Active', 'Active', 'Expired', 'Expired', 'Pending', 'Active', 'Active', 'Active', 'Expired', 'Active', 'Active', 'Active', 'Pending'];
const planAssignments = ['Premium', 'Premium', 'Standard', 'Standard', 'Standard', 'Standard', 'Basic', 'Basic', 'Basic', 'Premium', 'Standard', 'Premium', 'Basic', 'Premium', 'Standard', 'Basic', 'Premium', 'Standard', 'Standard', 'Basic'];

for (let i = 0; i < 20; i++) {
    const startDate = randomDate(new Date('2025-01-01'), new Date('2026-06-01'));
    const durMonths = [1, 3, 6, 12][Math.floor(Math.random() * 4)];
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + durMonths);

    const names = memberNames[i].split(' ');
    const firstName = names[0];
    const lastName = names.slice(1).join(' ') || '';

    sampleMembers.push({
        id: i + 1,
        firstName: firstName,
        lastName: lastName,
        email: memberEmails[i],
        phone: memberPhones[i],
        plan: planAssignments[i],
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
        status: statuses[i],
        address: `${Math.floor(Math.random() * 9999) + 1} ${['Rizal St', 'Mabini Ave', 'Bonifacio St', 'Luna St', 'Del Pilar Blvd'][Math.floor(Math.random() * 5)]}, Manila`,
        gender: ['Male', 'Female', 'Male', 'Female', 'Male', 'Female', 'Male', 'Female'][Math.floor(Math.random() * 8)],
        dob: formatDate(randomDate(new Date('1980-01-01'), new Date('2002-12-31'))),
        notes: '',
        avatar: null
    });
}

// =====================
// State
// =====================
let membersData = JSON.parse(JSON.stringify(sampleMembers));
let currentPage = 1;
const rowsPerPage = 8;
const addMemberDiscountOptions = {
    none: { label: 'No discount', type: 'fixed', value: 0 },
    student: { label: 'Student - 10%', type: 'percent', value: 10 },
    senior: { label: 'Senior - 20%', type: 'percent', value: 20 },
    promo: { label: 'Promo - P300', type: 'fixed', value: 300 }
};

function getMembershipCounts() {
    const counts = {
        total: membersData.length,
        active: 0,
        expired: 0,
        pending: 0,
        revenue: 0,
        plans: {}
    };

    membersData.forEach(member => {
        const price = membershipPlans.find(plan => plan.name === member.plan)?.price || 0;
        counts.revenue += member.status === 'Active' ? price : 0;
        counts.plans[member.plan] = (counts.plans[member.plan] || 0) + 1;

        if (member.status === 'Active') counts.active++;
        if (member.status === 'Expired') counts.expired++;
        if (member.status === 'Pending') counts.pending++;
    });

    return counts;
}

function getExpiringSoonCount() {
    const today = new Date();
    const warningWindow = new Date();
    warningWindow.setDate(today.getDate() + 7);

    return membersData.filter(member => {
        if (!member.endDate || member.status !== 'Active') return false;
        const endDate = parseDisplayDate(member.endDate);
        return endDate && !Number.isNaN(endDate.getTime()) && endDate >= today && endDate <= warningWindow;
    }).length;
}

function renderMembershipSummary() {
    const summary = document.getElementById('membershipSummary');
    if (!summary) return;

    const counts = getMembershipCounts();
    summary.innerHTML = `
        <div class="membership-summary-card">
            <span class="membership-summary-label">Total</span>
            <strong class="membership-summary-value">${counts.total}</strong>
        </div>
        <div class="membership-summary-card">
            <span class="membership-summary-label">Active</span>
            <strong class="membership-summary-value">${counts.active}</strong>
        </div>
        <div class="membership-summary-card">
            <span class="membership-summary-label">Pending</span>
            <strong class="membership-summary-value">${counts.pending}</strong>
        </div>
        <div class="membership-summary-card">
            <span class="membership-summary-label">Expired</span>
            <strong class="membership-summary-value">${counts.expired}</strong>
        </div>
    `;
}

function renderDashboardOverview() {
    const counts = getMembershipCounts();
    const total = counts.total || 1;
    const statTotalMembers = document.getElementById('statTotalMembers');
    const statActiveMembers = document.getElementById('statActiveMembers');
    const statEarnings = document.getElementById('statEarnings');
    const statExpiringMembers = document.getElementById('statExpiringMembers');

    if (statTotalMembers) statTotalMembers.textContent = counts.total;
    if (statActiveMembers) statActiveMembers.textContent = counts.active;
    if (statEarnings) statEarnings.textContent = `₱${counts.revenue.toLocaleString()}`;
    if (statExpiringMembers) statExpiringMembers.textContent = getExpiringSoonCount();

    const planKeys = ['Premium', 'Standard', 'Basic'];
    planKeys.forEach(planName => {
        const count = counts.plans[planName] || 0;
        const label = document.getElementById(`plan${planName}`);
        const fill = document.getElementById(`plan${planName}Fill`);
        if (label) label.textContent = `${count} members`;
        if (fill) fill.style.width = `${(count / total) * 100}%`;
    });

    const activityList = document.getElementById('activityList');
    if (!activityList) return;

    const latestMembers = [...membersData].slice(0, 4);
    const activityItems = [
        { label: `${counts.active} active memberships`, time: 'Current', dot: 'dot-checkin' },
        { label: `${counts.pending} pending approvals`, time: 'Current', dot: 'dot-payment' },
        { label: `${counts.expired} expired memberships`, time: 'Current', dot: 'dot-renew' }
    ];

    if (latestMembers[0]) {
        activityItems.unshift({
            label: `${latestMembers[0].firstName} ${latestMembers[0].lastName} is the latest member`,
            time: latestMembers[0].plan,
            dot: 'dot-new'
        });
    }

    activityList.innerHTML = activityItems.map(item => `
        <li class="activity-item">
            <div class="activity-dot ${item.dot}"></div>
            <div class="activity-info">
                <p>${item.label}</p>
                <span class="activity-time">${item.time}</span>
            </div>
        </li>
    `).join('');
}

function refreshMembershipView() {
    renderMembershipSummary();
    renderMembersTable();
    renderPlans();
}

function formatCurrency(amount) {
    return `P${Number(amount || 0).toLocaleString()}`;
}

function formatPlanPeriod(plan, quantity = 1) {
    if (!plan) return '';
    return `${quantity} ${plan.period}${quantity === 1 ? '' : 's'}`;
}

function syncAddMemberDurationOptions() {
    const planName = document.getElementById('amPlan')?.value;
    const plan = membershipPlans.find(item => item.name === planName);
    const durationSelect = document.getElementById('amDuration');
    if (!durationSelect) return;

    if (!plan) {
        durationSelect.innerHTML = '<option value="1">Choose a plan first</option>';
        durationSelect.disabled = true;
        return;
    }

    const currentValue = durationSelect.value;
    const durations = [1, 3, 6, 12];
    durationSelect.innerHTML = durations.map(duration =>
        `<option value="${duration}">${formatPlanPeriod(plan, duration)}</option>`
    ).join('');
    durationSelect.value = durations.includes(Number(currentValue)) ? currentValue : '1';
    durationSelect.disabled = false;
}

function getAddMemberPricing() {
    const planName = document.getElementById('amPlan')?.value || '';
    const duration = parseInt(document.getElementById('amDuration')?.value || '1', 10);
    const discountKey = document.getElementById('amDiscountType')?.value || 'none';
    const plan = membershipPlans.find(item => item.name === planName);
    const subtotal = plan ? plan.price * duration : 0;
    const discount = addMemberDiscountOptions[discountKey] || addMemberDiscountOptions.none;
    let discountAmount = discount.type === 'percent'
        ? subtotal * (discount.value / 100)
        : discount.value;

    discountAmount = Math.min(discountAmount, subtotal);

    return {
        plan,
        duration,
        subtotal,
        discountAmount,
        total: subtotal - discountAmount,
        discountLabel: discount.label
    };
}

function renderAddMemberPlanOptions() {
    const grid = document.getElementById('amPlanOptions');
    const hiddenInput = document.getElementById('amPlan');
    if (!grid || !hiddenInput) return;

    grid.innerHTML = membershipPlans.map(plan => {
        const isActive = hiddenInput.value === plan.name;
        return `
            <button type="button" class="wizard-plan-card ${isActive ? 'active' : ''}" data-plan-value="${plan.name}">
                <span class="wizard-plan-name">${plan.name}</span>
                <span class="wizard-plan-price">${formatCurrency(plan.price)} / ${plan.period}</span>
                <span class="wizard-plan-meta">${plan.features.length} inclusions</span>
            </button>
        `;
    }).join('');

    document.querySelectorAll('.wizard-plan-card').forEach(card => {
        card.addEventListener('click', function() {
            hiddenInput.value = this.dataset.planValue;
            syncAddMemberDurationOptions();
            renderAddMemberPlanOptions();
            updateAddMemberWizardSummary();
        });
    });
}

function updatePaymentMethodPanels() {
    const method = document.querySelector('input[name="amPaymentMethod"]:checked')?.value || '';
    const referenceLabel = document.getElementById('amPaymentReferenceLabel');
    const referenceInput = document.getElementById('amPaymentReference');
    const referenceGroup = document.getElementById('amPaymentReferenceGroup');

    document.querySelectorAll('.payment-method-card').forEach(card => {
        const radio = card.querySelector('input[type="radio"]');
        card.classList.toggle('active', radio?.checked);
    });

    document.querySelectorAll('.payment-qr-card').forEach(panel => {
        panel.classList.toggle('active', panel.dataset.paymentPanel === method);
    });

    if (referenceLabel) {
        referenceLabel.innerHTML = 'Reference Number <span class="required">*</span>';
    }

    if (referenceInput) {
        referenceInput.placeholder = 'Enter transaction reference';
        referenceInput.disabled = method === 'cash';
        if (method === 'cash') referenceInput.value = '';
    }

    if (referenceGroup) referenceGroup.style.display = method === 'cash' ? 'none' : '';
}

function updateAddMemberWizardSummary() {
    const pricing = getAddMemberPricing();
    const planSummary = document.getElementById('amPlanSummary');
    const paymentAmount = document.getElementById('amPaymentAmount');
    const discountSummary = document.getElementById('amDiscountSummary');
    const reviewContent = document.getElementById('amReviewContent');
    const paymentMethod = document.querySelector('input[name="amPaymentMethod"]:checked')?.value || 'Not selected';
    const paymentReference = document.getElementById('amPaymentReference')?.value.trim() || '—';
    const discountNote = document.getElementById('amDiscountNote')?.value.trim() || '—';
    const fullName = `${document.getElementById('amFirstName')?.value.trim() || ''} ${document.getElementById('amLastName')?.value.trim() || ''}`.trim() || '—';

    if (planSummary) {
        planSummary.textContent = pricing.plan
            ? `${pricing.plan.name} for ${formatPlanPeriod(pricing.plan, pricing.duration)} = ${formatCurrency(pricing.subtotal)}`
            : 'Select a plan first.';
    }

    if (paymentAmount) {
        paymentAmount.value = pricing.plan ? formatCurrency(pricing.total) : '';
    }

    if (discountSummary) {
        discountSummary.innerHTML = `
            <div class="discount-summary-row">
                <span>Subtotal</span>
                <strong>${formatCurrency(pricing.subtotal)}</strong>
            </div>
            <div class="discount-summary-row">
                <span>${pricing.discountLabel}</span>
                <strong>- ${formatCurrency(pricing.discountAmount)}</strong>
            </div>
            <div class="discount-summary-row total">
                <span>Total Due</span>
                <strong>${formatCurrency(pricing.total)}</strong>
            </div>
        `;
    }

    if (reviewContent) {
        reviewContent.innerHTML = `
            <div class="wizard-review-card">
                <span class="wizard-review-label">Member</span>
                <strong>${fullName}</strong>
                <span>${document.getElementById('amEmail')?.value.trim() || '—'}</span>
                <span>${document.getElementById('amPhone')?.value.trim() || '—'}</span>
            </div>
            <div class="wizard-review-card">
                <span class="wizard-review-label">Plan</span>
                <strong>${pricing.plan?.name || '—'}</strong>
                <span>${formatPlanPeriod(pricing.plan, pricing.duration) || '—'}</span>
                <span>${formatCurrency(pricing.subtotal)}</span>
            </div>
            <div class="wizard-review-card">
                <span class="wizard-review-label">Payment</span>
                <strong>${paymentMethod.toUpperCase()}</strong>
                <span>${paymentReference}</span>
                <span>${formatCurrency(pricing.total)}</span>
            </div>
            <div class="wizard-review-card">
                <span class="wizard-review-label">Discount</span>
                <strong>${pricing.discountLabel}</strong>
                <span>${discountNote}</span>
                <span>- ${formatCurrency(pricing.discountAmount)}</span>
            </div>
        `;
    }
}

function setAddMemberWizardStep(step) {
    const clampedStep = Math.min(5, Math.max(1, step));
    const prevBtn = document.getElementById('amPrevBtn');
    const nextBtn = document.getElementById('amNextBtn');
    const submitBtn = document.getElementById('amSubmitBtn');

    document.querySelectorAll('.wizard-step').forEach(panel => {
        panel.classList.toggle('active', Number(panel.dataset.step) === clampedStep);
    });

    document.querySelectorAll('.member-step').forEach(indicator => {
        const indicatorStep = Number(indicator.dataset.stepIndicator);
        indicator.classList.toggle('active', indicatorStep === clampedStep);
        indicator.classList.toggle('complete', indicatorStep < clampedStep);
    });

    if (prevBtn) prevBtn.disabled = clampedStep === 1;
    if (nextBtn) nextBtn.style.display = clampedStep === 5 ? 'none' : 'inline-flex';
    if (submitBtn) submitBtn.style.display = clampedStep === 5 ? 'inline-flex' : 'none';

    updateAddMemberWizardSummary();
}

function validateAddMemberWizardStep(step) {
    if (step === 1) {
        const requiredIds = ['amFirstName', 'amLastName', 'amEmail', 'amPhone'];
        for (const id of requiredIds) {
            const field = document.getElementById(id);
            if (field && !field.reportValidity()) return false;
        }
        return true;
    }

    if (step === 2) {
        const plan = document.getElementById('amPlan')?.value;
        if (!plan) {
            showToast('Please choose a membership plan.', 'error');
            return false;
        }
        return true;
    }

    if (step === 3) {
        const paymentMethod = document.querySelector('input[name="amPaymentMethod"]:checked');
        const paymentReference = document.getElementById('amPaymentReference');
        const paymentVerified = document.getElementById('amPaymentVerified');

        if (!paymentMethod) {
            showToast('Please select a payment method.', 'error');
            return false;
        }
        if (paymentMethod.value !== 'cash' && paymentReference && !paymentReference.value.trim()) {
            paymentReference.focus();
            showToast('Please enter the payment reference.', 'error');
            return false;
        }
        if (paymentVerified && !paymentVerified.checked) {
            showToast('Please verify the payment before continuing.', 'error');
            return false;
        }
        return true;
    }

    return true;
}

function resetAddMemberWizard() {
    const addForm = document.getElementById('addMemberForm');
    if (!addForm) return;

    addForm.reset();
    const hiddenPlan = document.getElementById('amPlan');
    if (hiddenPlan) hiddenPlan.value = '';
    syncAddMemberDurationOptions();
    renderAddMemberPlanOptions();
    updatePaymentMethodPanels();
    setAddMemberWizardStep(1);
}

// =====================
// Render Helpers
// =====================
function getInitials(first, last) {
    return (first.charAt(0) + last.charAt(0)).toUpperCase();
}

function getStatusBadge(status) {
    const colors = {
        'Active': '#2ed573',
        'Expired': '#ff6b6b',
        'Pending': '#f5c518'
    };
    const bgColors = {
        'Active': 'rgba(46,213,115,0.12)',
        'Expired': 'rgba(255,107,107,0.12)',
        'Pending': 'rgba(245,197,24,0.12)'
    };
    return `<span class="mem-status-badge" style="background:${bgColors[status] || 'rgba(255,255,255,0.05)'}; color:${colors[status] || '#aaa'};">${status}</span>`;
}

function getPlanBadge(plan) {
    const colors = { 'Premium': '#f5c518', 'Standard': '#36a4eb', 'Basic': '#2ed573' };
    const bgColors = { 'Premium': 'rgba(245,197,24,0.1)', 'Standard': 'rgba(54,164,235,0.1)', 'Basic': 'rgba(46,213,115,0.1)' };
    return `<span class="mem-plan-badge" style="background:${bgColors[plan] || 'rgba(255,255,255,0.05)'}; color:${colors[plan] || '#aaa'};">${plan}</span>`;
}

// =====================
// Filter & Paginate
// =====================
function getFilteredMembers() {
    const searchVal = document.getElementById('memSearchInput')?.value?.toLowerCase().trim() || '';
    const planFilter = document.getElementById('memPlanFilter')?.value || 'all';
    const statusFilter = document.getElementById('memStatusFilter')?.value || 'all';

    return membersData.filter(m => {
        const fullName = `${m.firstName} ${m.lastName}`.toLowerCase();
        const contactMatch = fullName.includes(searchVal) || m.email.toLowerCase().includes(searchVal) || m.phone.includes(searchVal);
        if (!contactMatch) return false;
        if (planFilter !== 'all' && m.plan !== planFilter) return false;
        if (statusFilter !== 'all' && m.status !== statusFilter) return false;
        return true;
    });
}

function getPaginatedMembers(filtered) {
    const start = (currentPage - 1) * rowsPerPage;
    return filtered.slice(start, start + rowsPerPage);
}

function getTotalPages(filtered) {
    return Math.max(1, Math.ceil(filtered.length / rowsPerPage));
}

// =====================
// Render Table
// =====================
function renderMembersTable() {
    const filtered = getFilteredMembers();
    const totalPages = getTotalPages(filtered);
    if (currentPage > totalPages) currentPage = totalPages;
    const pageMembers = getPaginatedMembers(filtered);

    const tbody = document.getElementById('memTableBody');
    if (!tbody) return;

    if (pageMembers.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" class="mem-empty-row">
                    <div class="mem-empty-state">
                        <i class="fas fa-users-slash"></i>
                        <p>No members found</p>
                        <span>Try adjusting your search or filters</span>
                    </div>
                </td>
            </tr>
        `;
    } else {
        tbody.innerHTML = pageMembers.map(m => `
            <tr class="mem-row" data-member-id="${m.id}">
                <td>
                    <div class="mem-cell-member">
                        <div class="mem-avatar">${getInitials(m.firstName, m.lastName)}</div>
                        <div class="mem-name-info">
                            <span class="mem-name">${m.firstName} ${m.lastName}</span>
                            <span class="mem-email-small">${m.email}</span>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="mem-cell-contact">
                        <span class="mem-phone">${m.phone}</span>
                        <span class="mem-email">${m.email}</span>
                    </div>
                </td>
                <td>${getPlanBadge(m.plan)}</td>
                <td><span class="mem-date">${m.startDate}</span></td>
                <td><span class="mem-date">${m.endDate}</span></td>
                <td>${getStatusBadge(m.status)}</td>
                <td>
                    <div class="mem-action-btns">
                        <button class="mem-action-btn mem-action-view" title="View Details" data-action="view" data-id="${m.id}">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="mem-action-btn mem-action-edit" title="Edit Member" data-action="edit" data-id="${m.id}">
                            <i class="fas fa-pen"></i>
                        </button>
                        <button class="mem-action-btn mem-action-delete" title="Delete Member" data-action="delete" data-id="${m.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    // Update totals & pagination
    const totalSpan = document.getElementById('memTotalCount');
    if (totalSpan) totalSpan.textContent = `${filtered.length} member${filtered.length !== 1 ? 's' : ''}`;

    const pageInfo = document.getElementById('memPageInfo');
    const prevBtn = document.getElementById('memPrevPage');
    const nextBtn = document.getElementById('memNextPage');
    if (pageInfo) pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    if (prevBtn) prevBtn.disabled = currentPage <= 1;
    if (nextBtn) nextBtn.disabled = currentPage >= totalPages;

    // Attach action events
    document.querySelectorAll('.mem-action-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const action = this.dataset.action;
            const id = parseInt(this.dataset.id);
            if (action === 'view') viewMemberDetails(id);
            else if (action === 'edit') editMember(id);
            else if (action === 'delete') deleteMember(id);
        });
    });

    // Row click to view details
    document.querySelectorAll('.mem-row').forEach(row => {
        row.addEventListener('click', function() {
            const id = parseInt(this.dataset.memberId);
            viewMemberDetails(id);
        });
    });
}

// =====================
// Render Plans
// =====================
function renderPlans() {
    const grid = document.getElementById('plansGrid');
    if (!grid) return;

    grid.innerHTML = membershipPlans.map(plan => `
        <div class="plan-card" style="border-top: 4px solid ${plan.color};">
            <div class="plan-card-header">
                <div>
                    <h3 class="plan-card-name">${plan.name}</h3>
                    <p class="plan-card-meta">Per person</p>
                </div>
                <div class="plan-card-price">
                    <span class="plan-price-symbol">₱</span>
                    <span class="plan-price-amount">${plan.price.toLocaleString()}</span>
                    <span class="plan-price-period">/${plan.period}</span>
                </div>
            </div>
            <div class="plan-card-body">
                <span class="plan-inclusion-count">${plan.features.length} inclusions</span>
            </div>
            <div class="plan-card-footer">
                <button class="plan-select-btn" style="background: ${plan.color}; color: #0d0d0d;" data-plan="${plan.name}">
                    <i class="fas fa-edit"></i> Manage
                </button>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.plan-select-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const planName = this.dataset.plan;
            alert(`✏️ Edit "${planName}" plan settings (coming soon!)`);
        });
    });

    // Add Plan button
    const addBtn = document.getElementById('plansAddBtn');
    if (addBtn) {
        addBtn.onclick = function() {
            const name = prompt('Enter new plan name:');
            if (name && name.trim()) {
                const price = prompt(`Enter monthly price for "${name.trim()}":`);
                if (price && !isNaN(price) && parseFloat(price) > 0) {
                    const newPlan = {
                        id: 'plan-' + name.toLowerCase().replace(/\s+/g, '-'),
                        name: name.trim(),
                        price: parseFloat(price),
                        period: 'month',
                        color: '#a855f7',
                        features: ['Custom plan feature 1', 'Custom plan feature 2'],
                        popular: false
                    };
                    membershipPlans.push(newPlan);
                    renderPlans();
                    alert(`✅ Plan "${name.trim()}" added successfully!`);
                }
            }
        };
    }
}

// =====================
// View Member Details (Modal)
// =====================
function viewMemberDetails(id) {
    const member = membersData.find(m => m.id === id);
    if (!member) return;

    // Create a modal overlay
    const overlay = document.createElement('div');
    overlay.className = 'mem-modal-overlay';
    overlay.innerHTML = `
        <div class="mem-modal mem-modal-details">
            <div class="mem-modal-header">
                <h3><i class="fas fa-user-circle"></i> Member Details</h3>
                <button class="mem-modal-close" id="memModalClose"><i class="fas fa-times"></i></button>
            </div>
            <div class="mem-modal-body">
                <div class="detail-top">
                    <div class="detail-avatar-large">${getInitials(member.firstName, member.lastName)}</div>
                    <div class="detail-name-section">
                        <h2 class="detail-fullname">${member.firstName} ${member.lastName}</h2>
                        <span class="detail-status">${getStatusBadge(member.status)}</span>
                        <span class="detail-plan">${getPlanBadge(member.plan)}</span>
                    </div>
                </div>
                <div class="detail-grid">
                    <div class="detail-item">
                        <label>Email</label>
                        <span>${member.email}</span>
                    </div>
                    <div class="detail-item">
                        <label>Phone</label>
                        <span>${member.phone}</span>
                    </div>
                    <div class="detail-item">
                        <label>Address</label>
                        <span>${member.address || '—'}</span>
                    </div>
                    <div class="detail-item">
                        <label>Gender</label>
                        <span>${member.gender || '—'}</span>
                    </div>
                    <div class="detail-item">
                        <label>Date of Birth</label>
                        <span>${member.dob || '—'}</span>
                    </div>
                    <div class="detail-item">
                        <label>Member ID</label>
                        <span>#${String(member.id).padStart(4, '0')}</span>
                    </div>
                    <div class="detail-item">
                        <label>Start Date</label>
                        <span>${member.startDate}</span>
                    </div>
                    <div class="detail-item">
                        <label>End Date</label>
                        <span>${member.endDate}</span>
                    </div>
                    <div class="detail-item">
                        <label>Membership Plan</label>
                        <span>${member.plan}</span>
                    </div>
                    <div class="detail-item">
                        <label>Status</label>
                        <span>${member.status}</span>
                    </div>
                </div>
                ${member.notes ? `
                <div class="detail-notes">
                    <label>Notes</label>
                    <p>${member.notes}</p>
                </div>` : ''}
            </div>
            <div class="mem-modal-footer">
                <button class="mem-modal-btn mem-modal-edit-btn" data-id="${member.id}"><i class="fas fa-pen"></i> Edit Member</button>
                <button class="mem-modal-btn mem-modal-close-btn"><i class="fas fa-times"></i> Close</button>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    // Animate in
    requestAnimationFrame(() => overlay.classList.add('active'));

    // Close handlers
    const close = () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => overlay.remove(), 300);
    };

    overlay.querySelector('#memModalClose').addEventListener('click', close);
    overlay.querySelector('.mem-modal-close-btn').addEventListener('click', close);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) close();
    });

    overlay.querySelector('.mem-modal-edit-btn').addEventListener('click', function() {
        close();
        setTimeout(() => editMember(parseInt(this.dataset.id)), 350);
    });
}

// =====================
// Edit Member (Modal form)
// =====================
function editMember(id) {
    const member = membersData.find(m => m.id === id);
    if (!member) return;

    const overlay = document.createElement('div');
    overlay.className = 'mem-modal-overlay';
    overlay.innerHTML = `
        <div class="mem-modal mem-modal-edit">
            <div class="mem-modal-header">
                <h3><i class="fas fa-pen"></i> Edit Member</h3>
                <button class="mem-modal-close" id="memEditClose"><i class="fas fa-times"></i></button>
            </div>
            <div class="mem-modal-body">
                <form id="editMemberForm">
                    <input type="hidden" id="editMemberId" value="${member.id}" />
                    <div class="form-row">
                        <div class="form-group">
                            <label>First Name <span class="required">*</span></label>
                            <input type="text" class="form-input" id="editFirstName" value="${member.firstName}" required />
                        </div>
                        <div class="form-group">
                            <label>Last Name <span class="required">*</span></label>
                            <input type="text" class="form-input" id="editLastName" value="${member.lastName}" required />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Email <span class="required">*</span></label>
                            <input type="email" class="form-input" id="editEmail" value="${member.email}" required />
                        </div>
                        <div class="form-group">
                            <label>Phone <span class="required">*</span></label>
                            <input type="text" class="form-input" id="editPhone" value="${member.phone}" required />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Plan <span class="required">*</span></label>
                            <select class="form-input" id="editPlan">
                                <option value="Premium" ${member.plan === 'Premium' ? 'selected' : ''}>Premium - ₱2,500/month</option>
                                <option value="Standard" ${member.plan === 'Standard' ? 'selected' : ''}>Standard - ₱1,500/month</option>
                                <option value="Basic" ${member.plan === 'Basic' ? 'selected' : ''}>Basic - ₱800/month</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Status <span class="required">*</span></label>
                            <select class="form-input" id="editStatus">
                                <option value="Active" ${member.status === 'Active' ? 'selected' : ''}>Active</option>
                                <option value="Expired" ${member.status === 'Expired' ? 'selected' : ''}>Expired</option>
                                <option value="Pending" ${member.status === 'Pending' ? 'selected' : ''}>Pending</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Start Date</label>
                            <input type="text" class="form-input" id="editStartDate" value="${member.startDate}" placeholder="MM/DD/YYYY" />
                        </div>
                        <div class="form-group">
                            <label>End Date</label>
                            <input type="text" class="form-input" id="editEndDate" value="${member.endDate}" placeholder="MM/DD/YYYY" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Address</label>
                            <input type="text" class="form-input" id="editAddress" value="${member.address || ''}" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group" style="flex: 1;">
                            <label>Notes</label>
                            <textarea class="form-input form-textarea" id="editNotes">${member.notes || ''}</textarea>
                        </div>
                    </div>
                </form>
            </div>
            <div class="mem-modal-footer">
                <button class="mem-modal-btn mem-modal-save-btn" id="editSaveBtn"><i class="fas fa-save"></i> Save Changes</button>
                <button class="mem-modal-btn mem-modal-cancel-btn" id="editCancelBtn"><i class="fas fa-times"></i> Cancel</button>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => overlay.classList.add('active'));

    const close = () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => overlay.remove(), 300);
    };

    overlay.querySelector('#memEditClose').addEventListener('click', close);
    overlay.querySelector('#editCancelBtn').addEventListener('click', close);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) close();
    });

    overlay.querySelector('#editSaveBtn').addEventListener('click', function() {
        const fName = document.getElementById('editFirstName').value.trim();
        const lName = document.getElementById('editLastName').value.trim();
        const email = document.getElementById('editEmail').value.trim();
        const phone = document.getElementById('editPhone').value.trim();

        if (!fName || !lName || !email || !phone) {
            alert('Please fill in all required fields.');
            return;
        }

        const idx = membersData.findIndex(m => m.id === id);
        if (idx === -1) return;

        membersData[idx] = {
            ...membersData[idx],
            firstName: fName,
            lastName: lName,
            email: email,
            phone: phone,
            plan: document.getElementById('editPlan').value,
            status: document.getElementById('editStatus').value,
            startDate: document.getElementById('editStartDate').value || membersData[idx].startDate,
            endDate: document.getElementById('editEndDate').value || membersData[idx].endDate,
            address: document.getElementById('editAddress').value,
            notes: document.getElementById('editNotes').value
        };

        refreshMembershipView();
        close();
        showToast('Member updated successfully!', 'success');
    });
}

// =====================
// Delete Member
// =====================
function deleteMember(id) {
    const member = membersData.find(m => m.id === id);
    if (!member) return;

    const overlay = document.createElement('div');
    overlay.className = 'mem-modal-overlay';
    overlay.innerHTML = `
        <div class="mem-modal mem-modal-confirm">
            <div class="mem-modal-header" style="border-color: rgba(255,107,107,0.2);">
                <h3 style="color: #ff6b6b;"><i class="fas fa-exclamation-triangle"></i> Confirm Delete</h3>
                <button class="mem-modal-close" id="confirmClose"><i class="fas fa-times"></i></button>
            </div>
            <div class="mem-modal-body" style="text-align: center; padding: 30px;">
                <div class="confirm-icon" style="font-size: 48px; color: #ff6b6b; margin-bottom: 16px;">
                    <i class="fas fa-user-slash"></i>
                </div>
                <p style="color: rgba(255,255,255,0.8); font-size: 16px; margin-bottom: 8px;">
                    Are you sure you want to delete <strong>${member.firstName} ${member.lastName}</strong>?
                </p>
                <p style="color: rgba(255,255,255,0.4); font-size: 13px;">This action cannot be undone.</p>
            </div>
            <div class="mem-modal-footer">
                <button class="mem-modal-btn mem-modal-delete-yes" id="confirmDeleteYes" style="background: #ff6b6b; color: white;" data-id="${member.id}"><i class="fas fa-trash"></i> Yes, Delete</button>
                <button class="mem-modal-btn mem-modal-cancel-btn" id="confirmDeleteNo"><i class="fas fa-times"></i> Cancel</button>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => overlay.classList.add('active'));

    const close = () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => overlay.remove(), 300);
    };

    overlay.querySelector('#confirmClose').addEventListener('click', close);
    overlay.querySelector('#confirmDeleteNo').addEventListener('click', close);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) close();
    });

    overlay.querySelector('#confirmDeleteYes').addEventListener('click', function() {
        const delId = parseInt(this.dataset.id);
        membersData = membersData.filter(m => m.id !== delId);
        refreshMembershipView();
        close();
        showToast('Member deleted successfully.', 'info');
    });
}

// =====================
// Toast Notification
// =====================
function showToast(message, type = 'success') {
    const existing = document.querySelector('.mem-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `mem-toast mem-toast-${type}`;
    const icons = { success: 'fa-check-circle', info: 'fa-info-circle', error: 'fa-times-circle' };
    toast.innerHTML = `<i class="fas ${icons[type] || icons.info}"></i> <span>${message}</span>`;
    document.body.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('active'));

    setTimeout(() => {
        toast.classList.remove('active');
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// =====================
// Initialize Membership
// =====================
function initMembership() {
    renderMembershipSummary();

    // Tab switching
    document.querySelectorAll('.mem-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.mem-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.mem-tab-content').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            const target = document.getElementById('memTab' + this.dataset.memtab.replace(/-./g, x => x[1].toUpperCase()).replace(/^./, s => s.toUpperCase()));
            if (target) target.classList.add('active');

            // Re-render specific tabs
            if (this.dataset.memtab === 'all-members') {
                renderMembersTable();
            } else if (this.dataset.memtab === 'plans') {
                renderPlans();
            }
        });
    });

    // Search input - debounced
    const searchInput = document.getElementById('memSearchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentPage = 1;
            renderMembersTable();
        });
    }

    // Filter selects
    ['memPlanFilter', 'memStatusFilter'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('change', function() {
                currentPage = 1;
                renderMembersTable();
            });
        }
    });

    // Refresh
    const refreshBtn = document.getElementById('memRefreshBtn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', function() {
            this.classList.add('spinning');
            renderMembersTable();
            setTimeout(() => this.classList.remove('spinning'), 600);
        });
    }

    // Pagination
    const prevBtn = document.getElementById('memPrevPage');
    const nextBtn = document.getElementById('memNextPage');
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) { currentPage--; renderMembersTable(); }
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const total = getTotalPages(getFilteredMembers());
            if (currentPage < total) { currentPage++; renderMembersTable(); }
        });
    }

    // Add Member form
    const addForm = document.getElementById('addMemberForm');
    if (addForm) {
        let currentAddMemberStep = 1;
        const nextBtn = document.getElementById('amNextBtn');
        const prevBtn = document.getElementById('amPrevBtn');
        const resetWizardBtn = document.getElementById('amResetWizardBtn');

        syncAddMemberDurationOptions();
        renderAddMemberPlanOptions();
        updatePaymentMethodPanels();
        setAddMemberWizardStep(currentAddMemberStep);

        document.getElementById('amDuration')?.addEventListener('change', updateAddMemberWizardSummary);
        document.getElementById('amDiscountType')?.addEventListener('change', updateAddMemberWizardSummary);
        document.getElementById('amDiscountNote')?.addEventListener('input', updateAddMemberWizardSummary);
        document.getElementById('amPaymentReference')?.addEventListener('input', updateAddMemberWizardSummary);
        ['amFirstName', 'amLastName', 'amEmail', 'amPhone'].forEach(id => {
            document.getElementById(id)?.addEventListener('input', updateAddMemberWizardSummary);
        });

        document.querySelectorAll('input[name="amPaymentMethod"]').forEach(radio => {
            radio.addEventListener('change', () => {
                updatePaymentMethodPanels();
                updateAddMemberWizardSummary();
            });
        });

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (!validateAddMemberWizardStep(currentAddMemberStep)) return;
                currentAddMemberStep++;
                setAddMemberWizardStep(currentAddMemberStep);
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentAddMemberStep = Math.max(1, currentAddMemberStep - 1);
                setAddMemberWizardStep(currentAddMemberStep);
            });
        }

        if (resetWizardBtn) {
            resetWizardBtn.addEventListener('click', () => {
                currentAddMemberStep = 1;
                resetAddMemberWizard();
            });
        }

        addForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (!validateAddMemberWizardStep(currentAddMemberStep)) return;
            if (currentAddMemberStep < 5) {
                currentAddMemberStep++;
                setAddMemberWizardStep(currentAddMemberStep);
                return;
            }

            const firstName = document.getElementById('amFirstName').value.trim();
            const lastName = document.getElementById('amLastName').value.trim();
            const email = document.getElementById('amEmail').value.trim();
            const phone = document.getElementById('amPhone').value.trim();
            const plan = document.getElementById('amPlan').value;
            const duration = parseInt(document.getElementById('amDuration').value, 10);
            const address = document.getElementById('amAddress').value.trim();
            const gender = document.getElementById('amGender').value;
            const dob = document.getElementById('amDOB').value;
            const notes = document.getElementById('amNotes').value.trim();
            const paymentMethod = document.querySelector('input[name="amPaymentMethod"]:checked')?.value || '';
            const paymentReference = document.getElementById('amPaymentReference').value.trim();
            const paymentVerified = document.getElementById('amPaymentVerified').checked;
            const discountType = document.getElementById('amDiscountType').value;
            const discountNote = document.getElementById('amDiscountNote').value.trim();
            const pricing = getAddMemberPricing();

            if (!firstName || !lastName || !email || !phone || !plan || !paymentMethod || !paymentVerified || (paymentMethod !== 'cash' && !paymentReference)) {
                showToast('Please fill in all required fields.', 'error');
                return;
            }

            const newId = generateMemberId();
            const start = new Date();
            const end = new Date(start);
            const selectedPlan = membershipPlans.find(item => item.name === plan);
            if (selectedPlan?.period === 'day') end.setDate(end.getDate() + duration);
            else if (selectedPlan?.period === 'week') end.setDate(end.getDate() + (duration * 7));
            else end.setMonth(end.getMonth() + duration);

            membersData.unshift({
                id: newId,
                firstName,
                lastName,
                email,
                phone,
                plan,
                startDate: formatDate(start),
                endDate: formatDate(end),
                status: 'Active',
                address,
                gender: gender || '—',
                dob: dob ? formatDate(new Date(dob)) : '—',
                notes,
                avatar: null,
                paymentMethod,
                paymentReference,
                discountType,
                discountNote,
                subtotalAmount: pricing.subtotal,
                discountAmount: pricing.discountAmount,
                totalAmount: pricing.total
            });

            currentAddMemberStep = 1;
            resetAddMemberWizard();
            // Switch to All Members tab and show the table
            const allMemTab = document.querySelector('.mem-tab[data-memtab="all-members"]');
            if (allMemTab) allMemTab.click();
            currentPage = 1;
            refreshMembershipView();
            showToast(`✅ ${firstName} ${lastName} added as a member!`, 'success');
        });
    }

    // Initial render
    refreshMembershipView();
}

// =====================
// Load Dashboard on Page Load
// =====================
document.addEventListener('DOMContentLoaded', () => {
    const dashboardNav = document.querySelector('.nav-item[data-module="dashboard"]');
    if (dashboardNav) {
        dashboardNav.click();
    }
});
