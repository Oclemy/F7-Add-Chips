
/*
- Main class.
- Initialize Framework 7.
- Create chip from input text when user presses enter
 */
var mainClass=function()
{
    /*
     -Initialize your app
     */
    var myApp = new Framework7();

    /*
    - Create and return chip
     */
    this.createChip=function(galaxyName)
    {
        //chip
        var chip=document.createElement('div');
        chip.className='chip';

        //chip media
        var chipLabel=document.createElement('div');
        chipLabel.className='chip-label';
        chipLabel.appendChild(document.createTextNode(galaxyName));

        //chip media
        var chipMedia=document.createElement('div');
        chipMedia.className='chip-media bg-teal';
        chipMedia.appendChild(document.createTextNode(galaxyName[0].toUpperCase()));

        //delete btn
        var deleteBtn=document.createElement('a');
        deleteBtn.setAttribute('href','#');
        deleteBtn.className='chip-delete';

        //append chip sections
        chip.appendChild(chipMedia);
        chip.appendChild(chipLabel);
        chip.appendChild(deleteBtn);

        //delete
        deleteBtn.onclick=function (e) {
            e.preventDefault();
            myApp.confirm('Do you want to delete '+galaxyName, function () {
                chip.remove();
            });
        };

        return chip;
    }
}
/*
- Get input value when users presses enter
 */
function getInputValue(e)
{
    m=new mainClass();

    //when user clicks enter
    if (e.keyCode == 13) {
            var galaxy = document.getElementById("galaxyTxt").value;
            document.getElementById("displaySectionID").appendChild(m.createChip(galaxy));
            document.getElementById("galaxyTxt").value="";
            return false;
        }
}