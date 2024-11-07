import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  @Render('home')
  home() {
    return {};
  }

  @Get('/about-us')
  @Render('about-us/sobre')
  index() {
    return {};
  }

}
