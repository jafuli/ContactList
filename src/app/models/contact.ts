import { Deserializable } from "./deserializable.model";

export class Contact implements Deserializable {

    id: string;
    job: string;
    icon: string;
    name: string;
    email: string;
    phone: string;
    companyName: string;
    profileImage: string;

    deserialize(input: any): this {
        return Object.assign(this, {
          id: input.id,
          job: input.job,
          icon: input.icon,
          name: input.name,
          email: input.email,
          phone: input.phone,
          companyName: input.company_name,
          profileImage: input.profile_image,
        });
    }

    filterByValue(value: string): boolean {
      value = value.toLowerCase();

      const jobHasValue = this.job.toLowerCase().includes(value);
      const nameHasValue = this.name.toLowerCase().includes(value);
      const emailHasValue = this.email.toLowerCase().includes(value);
      const companyNameHasValue = this.companyName.toLowerCase().includes(value);

      return jobHasValue || nameHasValue || emailHasValue || companyNameHasValue;
    }

}
