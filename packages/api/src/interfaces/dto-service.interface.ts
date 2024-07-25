export interface DtoService<T, U> {
  convertToDTO(entity: T): U;
}
