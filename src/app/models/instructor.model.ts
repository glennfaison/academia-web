export class Instructor {
  [x: string]: any;
  id: number;
  first_name: string;
  other_names: string;
  public get full_name(): string {
    return `${this.first_name} ${this.other_names}`;
  }
  username: string;
  password: string;
  email: string;
  date_of_birth: Date;
  public get age(): number {
    const today = new Date();
    const birthday = new Date(this.date_of_birth);
    let age = today.getFullYear() - birthday.getFullYear();
    age = today.getMonth() >= birthday.getMonth() ? age : age - 1;
    age = today.getDate() >= birthday.getDate() ? age : age - 1;
    return age;
  }
  place_of_birth: string;
  image_path: string;
  gender_id: number;
  gender?: any;
  courses_taught?: any[];
  classrooms?: any[];

  constructor(obj: any = {}) {
    const keys = Object.keys(obj);
    for (const key of keys) {
      if (!obj[key]) { continue; }
      this[key] = obj[key];
    }
  }

}
