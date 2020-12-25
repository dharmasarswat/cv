const socialLinks = [
	{
		name: "Facebook",
		icon: "fa fa-facebook",
		link: "https://www.facebook.com/dharmendrasarswat11/",
	},
	{
		name: "Instagram",
		icon: "fa fa-instagram",
		link: "https://www.instagram.com/dharma_sarswat/",
	},
	{
		name: "LinkedIn",
		icon: "fa fa-linkedin",
		link: "https://www.linkedin.com/in/dharmendrasarswat/",
	},
	{
		name: "Github",
		icon: "fa fa-github",
		link: "https://github.com/dharmasarswat",
	},
];

export const SocialIcons = () => {
	return (
		<>
			{socialLinks.map((socialLink, index) => {
				return (
					<a
						href={socialLink.link}
						target="_blank"
						rel="noopener noreferrer"
						key={index}
					>
						<div className={socialLink.icon + " socialIcon"}></div>
					</a>
				);
			})}
		</>
	);
};
