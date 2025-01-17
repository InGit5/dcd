export class Case implements Components.Schemas.CaseDto {
    capex?: number
    createdAt?: Date | null
    description?: string
    DG1Date?: Date | null
    DG2Date?: Date | null
    DG3Date?: Date | null
    DG4Date?: Date | null
    id?: string
    projectId?: string
    updatedAt?: Date | null
    name?: string
    isRef: boolean
    drainageStrategyLink?: string
    explorationLink?: string
    substructureLink?: string
    surfLink?: string
    topsideLink?: string
    transportLink?: string
    wellProjectLink?: string

    constructor(data: Components.Schemas.CaseDto) {
        this.capex = data.capex
        this.createdAt = data.createTime ? new Date(data.createTime) : null
        this.description = data.description ?? ""
        this.DG1Date = data.dG1Date ? new Date(data.dG1Date) : null
        this.DG2Date = data.dG2Date ? new Date(data.dG2Date) : null
        this.DG3Date = data.dG3Date ? new Date(data.dG3Date) : null
        this.DG4Date = data.dG4Date ? new Date(data.dG4Date) : null
        this.id = data.id
        this.projectId = data.projectId
        this.updatedAt = data.modifyTime ? new Date(data.modifyTime) : null
        this.name = data.name ?? ""
        this.isRef = data.referenceCase ?? false
        this.drainageStrategyLink = data.drainageStrategyLink ?? ""
        this.explorationLink = data.explorationLink ?? ""
        this.substructureLink = data.substructureLink ?? ""
        this.surfLink = data.surfLink ?? ""
        this.topsideLink = data.topsideLink ?? ""
        this.transportLink = data.transportLink ?? ""
        this.wellProjectLink = data.wellProjectLink ?? ""
    }

    static Copy(data: Case) {
        const caseCopy = new Case(data)
        return {
            ...caseCopy,
            DG1Date: data.DG1Date,
            DG2Date: data.DG2Date,
            DG3Date: data.DG3Date,
            DG4Date: data.DG4Date,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
        }
    }

    static fromJSON(data: Components.Schemas.CaseDto): Case {
        return new Case(data)
    }
}
