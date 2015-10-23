let SynfrastructureHelperMixin = {

    mergeAttributes : function(attr1, attr2){
        var newAttributes = {},
            attrname;

        for (attrname in attr1) { newAttributes[attrname] = attr1[attrname]; }
        for (attrname in attr2) { newAttributes[attrname] = attr2[attrname]; }

        return newAttributes;
    }

};

export default SynfrastructureHelperMixin;
