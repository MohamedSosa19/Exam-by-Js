// Project 8
var myCharacter=window.prompt('Please Enter Your Character').toLowerCase();


if(myCharacter=='A' || myCharacter=='E' || myCharacter=='I' || myCharacter=='O' || myCharacter=='U')
{
    document.getElementById('result7').innerHTML=myCharacter +' is Vowel Character';

}
else{

    document.getElementById('result7').innerHTML=myCharacter +' is Not Vowel Character';
    
}