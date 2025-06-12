interface IUser01 {
  username: string;
  password: string;
  phoneNumber: number;
}

export default interface INewUser extends IUser01 {
  birthDate: string;
}

// Export Default   : export default (Didalam 1 file, hanya boleh melakukan 1x export)
// Export Name      : export (Didalam 1 file diperbolehkan export code sebanyak mungkin)