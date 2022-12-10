import { FC } from "react";
import { IService } from "../type";

const ServiceCard: FC<{ service: IService }> = ({
	service:
	{
		title,
		about,
		Icon
	}
}) => {

	const createMarkup = () => {
		return {
			__html: about
		}
	}

	return (
		<div className="flex items-center p-2 space-x-4">
			<Icon className="w-12 h-12 text-green" />
			<div>
				<h4 className="font-bold">{title}</h4>
				<p dangerouslySetInnerHTML={createMarkup()} className="text-sm" />
			</div>
		</div>
	)
}

export default ServiceCard;