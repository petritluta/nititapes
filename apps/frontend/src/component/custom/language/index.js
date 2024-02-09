import SelectComponent from "../../general/select";
import Image from "next/image";

export default function Language() {
  const data = [
    {
      value: "en",
      label: (
        <Image
          src="/icon/albania-flag.png"
          alt="Niti Tape"
          width={22}
          height={22}
          priority
        />
      ),
    },
    {
      value: "al",
      label: (
        <Image
          src="/icon/united-kingdom-flag.png"
          alt="Niti Tape"
          width={20}
          height={20}
          priority
        />
      ),
    },
    {
      value: "de",
      label: (
        <Image
          src="/icon/germany-flag.png"
          alt="Niti Tape"
          width={20}
          height={20}
          priority
        />
      ),
    },
  ];

  return <SelectComponent data={data} defaultValue={data[0]}/>;
}
