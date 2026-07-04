import type { User, UserDTO, LoginResponseDTO } from "./types";

export function userModelFromDTO(dto: UserDTO): User {
  return {
    id: dto.id,
    version: dto.version,
    fullName: dto.full_name,
    phoneNumber: dto.phone_number,
    role: dto.role,
    email: dto.email,
  };
}

export function userDTOfromModel(model: User): UserDTO {
  return {
    id: model.id,
    version: model.version,
    full_name: model.fullName,
    phone_number: model.phoneNumber,
    role: model.role,
    email: model.email,
  };
}

export function userModelsFromDTOs(dtos: UserDTO[]): User[] {
  return dtos.map(userModelFromDTO);
}

export function NewUninitializedUser(): User {
  return {
    id: -1,
    version: -1,
    fullName: "",
    phoneNumber: "",
    role: "",
    email: "",
  };
}

export function userModelFromLoginResponse(dto: LoginResponseDTO): User {
  return userModelFromDTO(dto.user);
}