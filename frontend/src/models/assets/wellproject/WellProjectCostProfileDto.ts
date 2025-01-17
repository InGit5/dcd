export class WellProjectCostProfileDto implements Components.Schemas.WellProjectCostProfileDto {
    id?: string
    startYear: number | undefined
    values?: number [] | null
    epaVersion?: string | null
    currency?: Components.Schemas.Currency | undefined
    sum?: number | undefined

    constructor(data?: Components.Schemas.WellProjectCostProfileDto) {
        if (data !== undefined && data !== null) {
            this.id = data?.id
            this.startYear = data?.startYear
            this.values = data?.values ?? []
            this.epaVersion = data?.epaVersion ?? ""
            this.currency = data?.currency
            this.sum = data?.sum
        } else {
            this.id = "00000000-0000-0000-0000-000000000000"
            this.epaVersion = ""
        }
    }

    static fromJSON(data?: Components.Schemas.WellProjectCostProfileDto): WellProjectCostProfileDto | undefined {
        if (data === undefined || data === null) {
            return undefined
        }
        return new WellProjectCostProfileDto(data)
    }
}
