//
//  QBNativeView.m
//  QBaoDemo
//
//  Created by fengsh on 16/1/29.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "QBNativeView.h"

@implementation QBNativeView

- (id)initWithFrame:(CGRect)frame
{
  self = [super initWithFrame:frame];
  
  if (self) {
    UIButton *btn = [UIButton buttonWithType:UIButtonTypeCustom];
    btn.frame = CGRectMake(10, 10, 40, 20);
    [btn setTitle:@"点击" forState:UIControlStateNormal];
    [btn setTitleColor:[UIColor blackColor] forState:UIControlStateNormal];
    [btn addTarget:self action:@selector(onclicked:) forControlEvents:UIControlEventTouchUpInside];
    
    [self addSubview:btn];
  }
  
  return self;
}

- (void)onclicked:(id)sender
{
  UIAlertView *alter = [[UIAlertView alloc]initWithTitle:@"提示" message:@"这是native的消息。" delegate:self cancelButtonTitle:nil otherButtonTitles:@"确定", nil];
  [alter show];
}

@end


@implementation NativeView

RCT_EXPORT_MODULE()

//导出属性
RCT_EXPORT_VIEW_PROPERTY(shouldClick, BOOL)

- (UIView *)view
{
  return [[QBNativeView alloc] init];
}

@end
