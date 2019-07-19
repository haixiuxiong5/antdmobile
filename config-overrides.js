const {override,fixBabelImports}=require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName:'antd-mobile',
        style:'css',
    }),
    // addWebpackAlias({
    //     ["@"]:path.resolve(__dirname,"./src"),
    //     ["@components"]: path.resolve(__dirname, "./src/components")
    // })
)