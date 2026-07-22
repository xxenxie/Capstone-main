<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Brusko Gym - Admin</title>
    <link rel="stylesheet" href="admin.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
</head>
<body>
    <header class="header">
        <div class="header-left">
            <button class="hamburger-btn" id="hamburgerBtn" title="Toggle Sidebar">
                <i class="fas fa-bars"></i>
            </button>
            <img src="../image/Logo.jpg" alt="Brusko Gym Logo" class="header-logo" />
            <h1 class="gym-name">Brusko Gym</h1>
        </div>
        <div class="header-right">
            <div class="notification-wrapper">
                <button class="icon-btn" id="notificationBtn" title="Notifications">
                    <i class="fas fa-bell"></i>
                    <span class="badge" id="notificationBadge">0</span>
                </button>
                <div class="notification-dropdown" id="notificationDropdown">
                    <div class="dropdown-header">
                        <h3>Notifications</h3>
                        <span class="mark-read" id="markAllRead">Mark all as read</span>
                    </div>
                    <ul class="notification-list" id="notificationList">
                        <li class="notification-item">
                            <div class="notif-icon"><i class="fas fa-bell"></i></div>
                            <div class="notif-content">
                                <p class="notif-text">No new notifications</p>
                                <span class="notif-time">—</span>
                            </div>
                        </li>
                    </ul>
                    <div class="dropdown-footer">
                        <a href="#">View All Notifications</a>
                    </div>
                </div>
            </div>
            <div class="profile-wrapper">
                <button class="profile-btn" id="profileBtn" title="Profile">
                    <div class="profile-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="profile-info">
                        <span class="profile-name">Admin</span>
                        <span class="profile-role">Admin</span>
                    </div>
                    <i class="fas fa-chevron-down profile-arrow"></i>
                </button>
                <div class="profile-dropdown" id="profileDropdown">
                    <div class="dropdown-header">
                        <div class="dropdown-profile-preview">
                            <div class="dropdown-avatar">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="dropdown-user-info">
                                <span class="dropdown-user-name">Admin</span>
                                <span class="dropdown-user-role">Admin</span>
                            </div>
                        </div>
                    </div>
                    <ul class="profile-list">
                        <li class="profile-item" data-profile="profile">
                            <div class="profile-item-icon"><i class="fas fa-user-circle"></i></div>
                            <div class="profile-item-content">
                                <span class="profile-item-title">Profile</span>
                                <span class="profile-item-desc">Manage your account profile</span>
                            </div>
                            <i class="fas fa-chevron-right profile-arrow-icon"></i>
                        </li>
                        <li class="profile-item" data-profile="security">
                            <div class="profile-item-icon"><i class="fas fa-lock"></i></div>
                            <div class="profile-item-content">
                                <span class="profile-item-title">Security</span>
                                <span class="profile-item-desc">Password & authentication</span>
                            </div>
                            <i class="fas fa-chevron-right profile-arrow-icon"></i>
                        </li>
                        <li class="profile-item" data-profile="activity">
                            <div class="profile-item-icon"><i class="fas fa-history"></i></div>
                            <div class="profile-item-content">
                                <span class="profile-item-title">Activity Log</span>
                                <span class="profile-item-desc">Track admin actions & system events</span>
                            </div>
                            <i class="fas fa-chevron-right profile-arrow-icon"></i>
                        </li>
                    </ul>
                    <div class="dropdown-footer logout-footer">
                        <a href="#" class="logout-link" id="logoutLink">
                            <i class="fas fa-sign-out-alt"></i> Logout
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div class="layout-wrapper">
        <aside class="sidebar" id="sidebar">
            <nav class="sidebar-nav">
                <ul>
                    <li>
                        <a href="#" class="nav-item active" data-module="dashboard">
                            <i class="fas fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-item" data-module="membership">
                            <i class="fas fa-id-card"></i>
                            <span>Membership</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-item" data-module="attendance">
                            <i class="fas fa-calendar-check"></i>
                            <span>Attendance</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-item" data-module="reports">
                            <i class="fas fa-chart-bar"></i>
                            <span>Reports</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>

        <main class="main-content" id="mainContent">
            <div class="module-content" id="moduleContent">
                <h2>Welcome to Brusko Gym Admin</h2>
                <p>Select a module from the sidebar to get started.</p>
            </div>
        </main>
    </div>

    <script src="admin.js"></script>
</body>
</html>