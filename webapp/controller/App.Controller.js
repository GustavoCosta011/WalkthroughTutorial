sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
],(Controlador,MessageToast,JSONModel,ResourceModel) => {
    "usar estrito";
    
    return Controlador.extend("ui5.walkthrough.controller.App",{
        onInit() {
            this._count = 0;
            const oData = {
               recipienteDeTexto : {
                  name : ""
               }
            };
            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

            // set i18n model on view
            const i18nModel = new ResourceModel({
                bundleName: "ui5.walkthrough.i18n.i18n"
            });
            this.getView().setModel(i18nModel, "i18n");
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