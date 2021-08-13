import { Request, Response } from "express";
import { CreateComplimenteService } from "../services/CreateComplimentService";



class CreateComplimentController {

    async handle(request: Request, response: Response){

        const { user_receiver, user_sender, message, tag_id } = request.body;

        const createComplimentService = new CreateComplimenteService();

        const compliment = await createComplimentService.execute({user_receiver, user_sender, message, tag_id});

        return response.json(compliment);

    }


}

export { CreateComplimentController }