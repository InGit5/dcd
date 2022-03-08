//var tenantId = subscription().tenantId
var location = 'norwayeast'

module vnetModule 'vnet/vnet.bicep' = {
  name: 'vnet'
  params:{
    baseAppName: 'dcd'
    location: location
  }
}

module keyVault 'kv/kv.bicep' = {
  name: 'keyVault'
  params: {
    tenantId: tenantId
    accessPolicies: keyVaultAccessPolicies
    baseAppName: 'dcd-test-3'
    location: location
  }
}
