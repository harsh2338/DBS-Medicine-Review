var userRoles = config.userRoles = {
    user: 1,
    pharmacist: 2,
    admin: 4
}

config.accessLevels = {
    user: userRoles.user | userRoles.pharmacist | userRoles.admin,
    pharmacist: userRoles.user | userRoles.admin,
    admin: userRoles.admin
}