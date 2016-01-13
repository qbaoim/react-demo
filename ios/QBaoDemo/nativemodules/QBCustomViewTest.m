//
//  QBCustomViewTest.m
//  QBaoDemo
//
//  Created by fengsh on 16/1/12.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "QBCustomViewTest.h"
#import "RCTLog.h"
#import "RCTConvert.h"

@implementation QBCustomViewTest
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(callMe:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
  
  //RCTConvert
}

RCT_EXPORT_METHOD(addEvent:(NSString *)name details:(NSDictionary *)details)
{
  NSString *location = [RCTConvert NSString:details[@"location"]];
  NSDate *time = [RCTConvert NSDate:details[@"time"]];
  
}
@end
