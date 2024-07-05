sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],(Controlador,MessageToast,JSONModel,ResourceModel) => {
    "use strict";
    
    return Controlador.extend("ui5.walkthrough.controller.App",{
        onInit() {
            this._count = 0;
        },
        onShowHello(){
            // read msg from i18n model
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipient = this.getView().getModel().getProperty("/recipienteDeTexto/name");
            const sMsg = oBundle.getText("helloMsg", [sRecipient]);

            this._count++;                  
            MessageToast.show(sMsg +"\n" + "Contador: " + this._count);
        },   
   });
});