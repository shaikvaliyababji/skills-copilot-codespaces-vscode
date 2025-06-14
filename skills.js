function calculateSkillLevel(skill) {
    if (skill < 0) {
        return "Invalid skill level";
    } else if (skill <= 20) {
        return "Beginner";
    } else if (skill <= 50) {
        return "Intermediate";
    } else if (skill <= 80) {
        return "Advanced";
    } else {
        return "Expert";
    }
}