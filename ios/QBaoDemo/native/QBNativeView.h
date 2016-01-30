//
//  QBNativeView.h
//  QBaoDemo
//
//  Created by fengsh on 16/1/29.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

#import "RCTViewManager.h"

//桥接给js
@interface NativeView : RCTViewManager

@end


@interface QBNativeView : UIView
@property (nonatomic,assign) BOOL       shouldClick;
@end
