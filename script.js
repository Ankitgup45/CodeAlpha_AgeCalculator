function calculateAge() {
    const dob = document.getElementById('dob').value;
    const name = document.getElementById('name').value;

    if (!dob) {
        alert('Please enter your date of birth');
        return;
    }

    const dobDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();
    const dayDiff = today.getDate() - dobDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    let agePhase = '';
    if (age < 13) {
        agePhase = 'Child';
    } else if (age >= 13 && age < 20) {
        agePhase = 'Teenager';
    } else if (age >= 20 && age < 60) {
        agePhase = 'Adult';
    } else {
        agePhase = 'Old age';
    }

    const resultText = `Hi ${name}, your age is ${age} years, you are an ${agePhase}.`;
    document.getElementById('result').textContent = resultText;
}
