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

module appConfigDeploy 'appcs/appcs.bicep' = {
  name: 'appConfig'
  params: {
    baseAppName: baseAppName
    location: location
  }
}

module WebApps 'webapp/main.bicep' = {
  name: 'webApps'
  params: {
    baseAppName: baseAppName
  }
}
