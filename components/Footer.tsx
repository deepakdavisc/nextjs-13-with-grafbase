import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

type ColumnsProps = {
  title: string;
  links: Array<string>;
};

const FooterColumns = ({ title, links }: ColumnsProps) => {
  return (
    <div className="footer_column">
      <h4 className="font-semibold">{title}</h4>
      <ul className="flex flex-col gap-2 font-normal">
        {links.map((link) => (
          <Link href={link} key={link}>
            {link}
          </Link>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image src="./logo-purple.svg" alt="logo 2" width={115} height={45} />
          <p className="text-start text-sm font-normal max-w-xs">
            Flexible- This is a demo site
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumns
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumns
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
            <FooterColumns
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            />
          </div>
          <FooterColumns
            title={footerLinks[3].title}
            links={footerLinks[3].links}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumns
              title={footerLinks[4].title}
              links={footerLinks[4].links}
            />
            <FooterColumns
              title={footerLinks[5].title}
              links={footerLinks[5].links}
            />
          </div>
          <FooterColumns
            title={footerLinks[6].title}
            links={footerLinks[6].links}
          />
        </div>
      </div>
      <div className="flexBetween footer_copyright">
        <p>2023 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
