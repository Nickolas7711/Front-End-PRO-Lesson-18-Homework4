function saveData(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value;
    const languages = Array.from(document.querySelectorAll('input[name="languages"]:checked')).map(checkbox => checkbox.value);

    const valuesInTable = document.createElement('tr');
    valuesInTable.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${birthdate}</td>
        <td>${gender}</td>
        <td>${city}</td>
        <td>${address}</td>
        <td>${languages.join('<br> ')}</td>
    `;

    const dataBody = document.getElementById('dataBody');
    dataBody.appendChild(valuesInTable);

    const dataTable = document.getElementById('dataTable');
    dataTable.style.display = 'block';
    const registrationForm = document.getElementById('registrationForm');
        registrationForm.style.display = 'none';

    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('birthdate').value = '';
    document.getElementById('genderMale').checked = false;
    document.getElementById('genderFemale').checked = false;
    document.getElementById('city').value = '';
    document.getElementById('address').value = '';
    const languageCheckboxes = document.querySelectorAll('input[name="languages"]:checked');
    languageCheckboxes.forEach(checkbox => checkbox.checked = false);
}