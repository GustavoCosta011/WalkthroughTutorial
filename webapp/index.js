sap.ui.define(["sap/ui/core/mvc/XMLView"], (XMLView) => {
    "usar estrito" ;
    XMLView.create({
        viewName: "ui5.walkthrough.view.App"
    }).then((oView) => oView.placeAt("conteudo"));
});

 