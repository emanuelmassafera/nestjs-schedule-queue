import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import { Tweet } from './entities/tweet.entity';

@Module({
  imports: [SequelizeModule.forFeature([Tweet])],
  controllers: [TweetsController],
  providers: [TweetsService],
})
export class TweetsModule {}
