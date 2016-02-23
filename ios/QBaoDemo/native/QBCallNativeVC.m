//
//  QBCallNativeVC.m
//  QBaoDemo
//
//  Created by fengsh on 16/2/18.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "QBCallNativeVC.h"
#import "RCTBridge.h"
#import "RCTConvert.h"
#import "RCTNavigator.h"
#import "RCTUIManager.h"
#import "UIView+React.h"

#import "QBDemoVC.h"

@implementation QBCallNativeVC

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(push:(id)navigationjson callback:(RCTResponseSenderBlock)callback)
{
  //self.bridge.uiManager;
  
  UIView *v = [RCTUIManager JSResponder];
  UIViewController *vc = v.reactViewController;
  id vvv = vc.parentViewController;
  
  id kk = [[[UIApplication sharedApplication] keyWindow]rootViewController];
  //UINavigationController *controller = (UINavigationController*)[[[UIApplication sharedApplication] keyWindow] rootViewController];
  
  QBDemoVC *vcv = [[QBDemoVC alloc]init];
  //controller = [UINavigationController alloc]initWithRootViewController:(nonnull UIViewController *)
  
  //UINavigationController *controller = [[UINavigationController alloc]init];
  ((UINavigationController*)kk).navigationBarHidden = NO;
  [kk pushViewController:vcv animated:YES];
  
  callback(@[[NSNull null]]);
}

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

@end
