$(document).ready(function () {

    var removedSkills = [];

    $('#addSkill').removeClass('btn-danger').addClass('btn-success');
    $('h1').addClass('text-center');

    $('#skills tbody').on('click', 'button', function () {
        var row = $(this).closest('tr');
        // Before we remove the row, save it's outerHTML
        removedSkills.push(row[0].outerHTML);
        row.fadeOut(500, function () {
            row.remove();
        });
        // Ensure that the "Restore Removed Skills" button is enabled
        $('#restoreSkills').removeAttr('disabled');
    });

    
    /* -------------- Add a New Skill -------------- */
    $('#addSkill').click(function (evt) {
        
        
        let input = $('#input-value').val();
        let newRow =
            `
        <tr>
            <td><button class="btn btn-xs btn-danger">X</button></td>
            <td class="text-center">${input}</td>
        </tr>
        `

        $('#input-value').val('');
        $('tbody').append(newRow);

    });


    /* -------------- Add a skill through enter -------------- */

    document.getElementById('input-value').addEventListener('keyup', function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("addSkill").click();
        }
    
    });

    /* -------------- Restore Removed Skills -------------- */
    $('#restoreSkills').on('click', function () {
        removedSkills.forEach(function (skill) {
            $('#skills tbody').append(skill);
        });
        // Clear the removedSkills array
        removedSkills = [];
        // Disable the button
        // Note that the disabled attribute does not need a value
        $('#restoreSkills').attr('disabled', '');
    });


});

