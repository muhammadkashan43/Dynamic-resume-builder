var resumeForm = document.getElementById("resume-form");
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent traditional form submission
    // Capture form values
    var resumeData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        education: document.getElementById("education").value,
        experience: document.getElementById("experience").value,
        skills: document.getElementById("skills").value.split(","),
        careerObjective: document.getElementById("career-objective").value,
        certifications: document.getElementById("certifications").value.split(",")
    };
    // Handle Profile Picture Upload
    var profilePictureInput = document.getElementById("profile-picture");
    var file = profilePictureInput.files ? profilePictureInput.files[0] : null;
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var profileImage = document.getElementById("profile-picture-display");
            profileImage.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(file);
    }
    // Display the resume section
    var resumeDisplay = document.getElementById("resume-display");
    resumeDisplay.style.display = "flex";
 
    // Populate personal information
    document.getElementById("resume-name").innerText = resumeData.name;
    document.getElementById("display-name").innerText = resumeData.name;
    var emailLink = document.getElementById("display-email");
    emailLink.innerText = resumeData.email;
    emailLink.href = "mailto:".concat(resumeData.email);
    document.getElementById("display-phone").innerText = resumeData.phone;
    // Populate education, experience, and skills
    document.getElementById("display-education").innerText = resumeData.education;
    document.getElementById("display-experience").innerText = resumeData.experience;
    // Populate career objective
    document.getElementById("display-career-objective").innerText = resumeData.careerObjective; // This should work now
    var certificationsList = document.getElementById("display-certifications");
    certificationsList.innerHTML = ""; // Clear any existing certifications
    resumeData.certifications.forEach(function (certification) {
        var li = document.createElement("li");
        li.innerText = certification.trim();
        certificationsList.appendChild(li);
    });
    // Populate skills as a list
    var skillsList = document.getElementById("display-skills");
    skillsList.innerHTML = ""; // Clear any existing skills
    resumeData.skills.forEach(function (skill) {
        var li = document.createElement("li");
        li.innerText = skill.trim();
        skillsList.appendChild(li);
    });
     resumeForm.reset();
});
