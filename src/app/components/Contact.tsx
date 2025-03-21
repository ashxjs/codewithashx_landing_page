import { GithubLogo } from "@/lib/icons/GithubLogo";
import { InstagramLogo } from "@/lib/icons/InstagramLogo";
import { LinkedinLogo } from "@/lib/icons/LinkedinLogo";
import { SocialBtn } from "@/lib/SocialButton";

const LINKEDIN_URL = "https://www.linkedin.com/in/alexis-hurunghee";
const GITHUB_URL = "https://github.com/ashxjs";
const INSTAGRAM_URL = "https://www.instagram.com/_codewithashx";

const ICON_SIZE = "50px";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col justify-center items-center py-10 px-6 gap-4">
      <div className="flex items-center justify-center gap-4">
        <SocialBtn href={INSTAGRAM_URL} ariaLabel="Instagram Profile">
          <InstagramLogo color="#FFFFFF" height={ICON_SIZE} width={ICON_SIZE} />
        </SocialBtn>
        <SocialBtn href={GITHUB_URL} ariaLabel="Github Profile">
          <GithubLogo color="#FFFFFF" height={ICON_SIZE} width={ICON_SIZE} />
        </SocialBtn>
        <SocialBtn href={LINKEDIN_URL} ariaLabel="Linkedin Profile">
          <LinkedinLogo color="#FFFFFF" height={ICON_SIZE} width={ICON_SIZE} />
        </SocialBtn>
      </div>
      <p>{`©${currentYear} - present Code with Ashx`}</p>
    </footer>
  );
};
