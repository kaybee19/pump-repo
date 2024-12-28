import React from "react";
import logo from "./assets/images/pmpc-logo-white.png";
import { socials } from "./utils";
import { MdContentCopy } from "react-icons/md";

export default function App() {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    if (!copied) {
      setCopied(true);
      navigator.clipboard.writeText(
        "EqeEBGHQhQy6SqeaJcnqAsNs3qaG19sdF89Xsarpump"
      );
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 3500);
  }, [copied]);

  return (
    <div>
      <div className="background-img" />
      <div className="body">
        <h1 className="text-3xl">Just Pump It!</h1>
        <div
          onClick={handleCopy}
          className={`opacity-50 flex gap-2 items-center w-fit ${
            !copied ? "cursor-pointer" : ""
          }`}
        >
          <MdContentCopy />
          {copied ? (
            <p>Copied</p>
          ) : (
            <p className="text-xs md:text-base">EqeEBGHQhQy6SqeaJcnqAsNs3qaG19sdF89Xsarpump</p>
          )}
        </div>
        <img src={logo} className="w-48" />
        <div className="my-4">
          <p className="text-center text-sm md:text-base px-2">
            This is more than just a meme coin — it's a statement. This will never stop... So just pump it!
          </p>
        </div>
        <div className="flex gap-8 md:gap-12 w-fit">
          {socials.map((social, k) => (
            <a className="underline" href={social.link} key={k} target="_blank">
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
