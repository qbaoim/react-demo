//
//  QBNativeVC.m
//  QBaoDemo
//
//  Created by fengsh on 16/2/19.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "QBNativeVC.h"


@implementation QBNativeVC

RCT_EXPORT_MODULE()

- (UIView *)view
{
  if (!self.vc) {
    self.vc = [[QBMeVC alloc] init];
  }
  
  return self.vc.view;
  
//  UIView *v = [UIView new];
//  v.backgroundColor = [UIColor greenColor];
//  return v;
}

@end
