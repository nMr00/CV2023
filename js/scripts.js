function MostrarDatosContacto()
{
    document.getElementById(`m-email`).style.display=`block`;
    document.getElementById(`m-tel`).style.display=`block`;
}

function MostrarExperiencia(btselec, btdes, btdes2, expact, expdes, expdes2)
{
    document.getElementById(btselec).style.backgroundColor="aquamarine";
    document.getElementById(btdes).style.backgroundColor="transparent";
    document.getElementById(btdes2).style.backgroundColor="transparent";

    document.getElementById(expact).style.display=`block`;
    document.getElementById(expdes).style.display=`none`;
    document.getElementById(expdes2).style.display=`none`;
}
