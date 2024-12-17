import { Conference } from "../../models/conference";

export class ConferenceProvider {
    // Array of conferences with their dates, images, titles, and contents // 0-indexed month
	private static conferenceDatas: Conference[] = [
		{
			date: new Date(2022, 11, 8),
			image: '/assets/images/conf_walter_bouvais.png',
			title: 'Conference avec Walter Bouvais',
			details: "Une conférence sur l'économie regénérative, une économie qui prendrait en compte les ressources planétaires et plus généralement comment penser la place des ingénieur.e.s et repenser les métiers actuels face aux défis écologiques"
		},
		{
			date: new Date(2023, 1, 1),
			image: '/assets/images/conf_delphine_batho.jpg',
			title: 'Conference avec Delphine Batho',
			details: "Ministre de l'écologie, du développement durable et de l'énergie en 2012, Delphine Batho se présente en 2021 aux primaires des écologistes et arrive en troisième position. Actuellement députée des Deux-Sèvres, elle prône la décroissance et se présente comme écoféministe."
		},
		{
			date: new Date(2023, 4, 5),
			image: '/assets/images/conf_sea_shepherd.png',
			title: 'Conference avec Sea Shepherd',
			details: "Conférence animée par 3 bénévoles de Sea Shepherd !ONG incontournable de la défense des océans ! Les bénévoles seront là pour nous faire connaître leur ONG, leurs actions et missions, aborderont le problème de captures de dauphins en Atlantique ainsi que leur opération Dolphin Bycatch"
		},
		{
			date: new Date(2024, 1, 14),
			image: "",
			title: 'Conférence débat',
			details : "Table ronde sur le thème « Faut-il entrer en désobéissance pour avoir un impact dans la lutte écologiste ? ». Trois intervenant.e.s débattrons sur ce thème dont 2 militant.e.s et un homme politique."
		}
		// {
		// 	date: new Date(2025, 0, 1),
		// 	image: '/assets/images/conf_sea_shepherd.png',
		// 	title: 'Test',
		// 	details: 'TEST'
		// }
	];

	public static getConferenceDatas(nb_elem: number = -1) : Conference[] {
		if (nb_elem >= 0)
			return this.conferenceDatas.slice(0, nb_elem);
		return this.conferenceDatas; 
	}

	// Check if a date is a conference date
	public static isConferenceDate(date: Date): boolean {
		return this.conferenceDatas.some(
			(conference) =>
			conference.date.getDate() === date.getDate() &&
			conference.date.getMonth() === date.getMonth() &&
			conference.date.getFullYear() === date.getFullYear());
	}

	// Return the conference date if the given date matches it
	public static getConferenceDate(date : Date): Conference | null {
		return this.conferenceDatas.find(
			(conference) =>
			  conference.date.getDate() === date.getDate() &&
			  conference.date.getMonth() === date.getMonth() &&
			  conference.date.getFullYear() === date.getFullYear()
		) || null;
	}
	public static getConferenceIndex(date : Date): number {
		for(let i = 0; i < this.conferenceDatas.length; ++i){
			if (this.conferenceDatas[i].date == date) {
				return i;
			}
		}
		return -1;
	}

	// Method to find the next conference, if none were found return null
	public static getNextConferenceDate(): Date | null {
		const today = new Date();
		const upcomingConferences = this.conferenceDatas.filter(
		  conference => conference.date >= today
		);
		if (upcomingConferences.length === 0) return null;
		
		// Sort by closest date
		upcomingConferences.sort((a, b) => a.date.getTime() - b.date.getTime());
		return upcomingConferences[0].date;
	}

	public static addConference(conf : Conference) { this.conferenceDatas.push(conf); }
	public static removeConference(conf_to_remove : Conference) { this.conferenceDatas = this.conferenceDatas.filter(conf => conf !== conf_to_remove) }
}
