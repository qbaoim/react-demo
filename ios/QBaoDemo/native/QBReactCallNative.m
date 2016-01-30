//
//  QBReactCallNative.m
//  QBaoDemo
//
//  Created by fengsh on 16/1/28.
//  Copyright © 2016年 Facebook. All rights reserved.
//  JS 如何调用:
/*
       1.在需要的module里
        var reactcallnative = require('NativeModules').QBReactCallNative;
 
       2.在构造或需要的地方
        reactcallnative.getNativeArray({ok:'goods'},(obj) => {
          console.log(obj);
        });
 */
//

#import "QBReactCallNative.h"
#import "RCTBridge.h"
#import "RCTConvert.h"
#import "RCTEventDispatcher.h"

@implementation QBReactCallNative

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getNativeArray:(id)inParams callback:(RCTResponseSenderBlock)callback)
{
  NSLog(@"传入的参数为:%@",inParams);
  
  if ([inParams isKindOfClass:[NSString class]]) {
     NSLog(@"入参为字符串");
  }
  else if ([inParams isKindOfClass:[NSDictionary class]])
  {
     NSLog(@"入参为js 字典对象");
  }
  else if ([inParams isKindOfClass:[NSArray class]])
  {
     NSLog(@"入参为js 数组对象");
  }
  
  NSString *s = [RCTConvert NSString:nil];
  NSURL *URL = [RCTConvert NSURL:@"http://baidu.com"];
  NSNumber *anchorViewTag = [RCTConvert NSNumber:@(10)];
  NSArray<NSString *> *buttons = [RCTConvert NSStringArray:@[@"ok",@"good"]];
  NSInteger i = [RCTConvert NSInteger:@(5)];

  
  callback(@[inParams]);
  
}

RCT_EXPORT_METHOD(getNativeDictionary:(id)inParams callback:(RCTResponseSenderBlock)callback)
{
  callback(@[@""]);
  
}

RCT_EXPORT_METHOD(test)
{
  [self sendEventToJS];
}
//主动推到js
- (void)sendEventToJS
{
  [_bridge.eventDispatcher sendAppEventWithName:@"sendEventToJS"
                                               body:@{@"name": @"fengshTest"}];
}



@end
