sap.ui.define([
    "sap/ui/core/mvc/Controller" 
],(Controlador) => {
    "usar estrito";
    
    return Controlador.extend("ui5.walkthrough.controller.App",{
        onShowHello(){
        alert("OLOKO BICHO");
        }
   });
});