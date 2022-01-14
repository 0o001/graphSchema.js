function graphSchema(schemaFunction) {
    return schemaFunction.toString().replace(/=/g, ':');
}

