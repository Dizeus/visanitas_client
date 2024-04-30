
export interface IRecord {
    id: string;
    time: Date;
    bl_pressure_top: number;
    bl_pressure_bottom: number;
    well_being: number;
    activity: number;
    meal: string,
    note: string,
}