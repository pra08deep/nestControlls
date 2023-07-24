import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request,Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/createuser.dtos';

@Controller('users')
export class UsersController {
    @Get('')
    getUsers()
    {
        return { 
            username:'name',email:'email'
        };

    }
    

    @Get('post')
    getUserspost()
    {
        return { 
            username:'name',email:'email',
            post:[{
                id:'1',
                name:'name'
        }]
        };

    }

    @Get('post/commets')
    getUserspostcomments()
    {
        return { 
            username:'coometns' 
        };

    }
    /*
    @Post()
    createUser(@Req() request:Request,@Res() response:Response){
        console.log(
            request.body
        );
        response.send('created');
        
    }*/
    @Post('create')
    createuser(@Body() userData:CreateUserDto){
    console.log(userData);
        return{};
    }

    }


