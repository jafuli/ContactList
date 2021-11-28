import { Deserializable } from "./deserializable.model";

export class Contact implements Deserializable {

    id: string;
    job: string;
    icon: string;
    name: string;
    email: string;
    phone: string;
    company_name: string;
    profile_image: string;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }

    filterByValue(value: string): boolean {
      value = value.toLowerCase();

      return this.job.toLowerCase().includes(value) ||
      this.name.toLowerCase().includes(value) ||
      this.email.toLowerCase().includes(value) ||
      this.company_name.toLowerCase().includes(value)
    }

}
