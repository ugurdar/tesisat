import Icon from "./Icon";
import { SITE } from "@/lib/constants";

export default function Header() {
  return (
    <div className="flex items-center gap-3">
      <img src="/logo.svg" alt="Logo" className="h-10 w-10" />
      <div>
        <p className="font-bold leading-tight">{SITE.name}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">Eskişehir genelinde tadilat & tesisat</p>
      </div>
    </div>
  );
}
