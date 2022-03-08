//var tenantId = subscription().tenantId
var location = 'norwayeast'
var baseAppName = 'dcdtest'
module vnetModule 'vnet/vnet.bicep' = {
  name: 'vnet'
  params:{
    baseAppName: baseAppName
    location: location
  }
}


module containerRegistry 'acr/acr.bicep' = {
  name: 'acr'
  params: {
    baseAppName: baseAppName
    location: location
  }
}
