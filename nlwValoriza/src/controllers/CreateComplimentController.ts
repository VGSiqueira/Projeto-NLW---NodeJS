import { Request, Response } from "express";
import { CreateComplimenteService } from "../services/CreateComplimentService";



class CreateComplimentController {

    async handle(request: Request, response: Response){

        const { user_receiver, message, tag_id } = request.body;
        const { user_id } = request;

        const createComplimentService = new CreateComplimenteService();

        const compliment = await createComplimentService.execute({user_receiver, user_sender: user_id, message, tag_id});

        return response.json(compliment);

    }


}

export { CreateComplimentController }